// ... existing imports ...
import { api } from "./api";

// ... existing User type ...

type AuthContextType = {
  user: User | null;
  isLoadingUser: boolean;
  signUp: (email: string, password: string) => Promise<string | null>;
  signIn: (email: string, password: string) => Promise<string | null>;
  signOut: () => Promise<void>;
  hasSeenIntro: boolean;
  isOnboardingComplete: boolean;
  // NEW: Add this function to the context type
  updateUserStatus: (updates: { has_seen_intro?: boolean; has_set_goals?: boolean }) => Promise<void>;
};

// ... existing AuthContext and AuthProvider ...

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // ... existing state (user, isLoadingUser) ...

  // ... existing loadUser, signUp, signIn, signOut ...

  // NEW: Implement the update function
  const updateUserStatus = async (updates: { has_seen_intro?: boolean; has_set_goals?: boolean }) => {
    if (!user) return;
    
    const updatedUser = await api.updateOnboardingStatus(updates);
    
    if (updatedUser) {
      // Update local state immediately so the UI reacts
      setUser((prev) => prev ? { ...prev, ...updates } : null);
    }
  };

  const value = useMemo(
    () => ({ 
        user, 
        isLoadingUser, 
        signUp, 
        signIn, 
        signOut,
        hasSeenIntro: user?.has_seen_intro ?? false,
        isOnboardingComplete: user?.has_set_goals ?? false,
        updateUserStatus // Add to value
    }),
    [user, isLoadingUser]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}