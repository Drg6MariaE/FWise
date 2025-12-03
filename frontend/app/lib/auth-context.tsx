import { createContext, useContext, useEffect, useMemo, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import { api } from "./api";

type User = {
  user_id: string;
  email: string;
  username: string;
  has_seen_intro: boolean;
  has_set_goals: boolean;
};

type AuthContextType = {
  user: User | null;
  isLoadingUser: boolean;
  signUp: (email: string, password: string) => Promise<string | null>;
  signIn: (email: string, password: string) => Promise<string | null>;
  signOut: () => Promise<void>;
  hasSeenIntro: boolean;
  isOnboardingComplete: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      setIsLoadingUser(true);
      const token = await SecureStore.getItemAsync('auth_token');
      if (token) {
        const userData = await api.getMe();
        if (userData && userData.user_id) {
          setUser(userData);
        } else {
          await signOut(); 
        }
      }
    } catch (error) {
      console.log("Error loading user:", error);
    } finally {
      setIsLoadingUser(false);
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const data = await api.register(email, password);
      if (data.token) {
        await SecureStore.setItemAsync('auth_token', data.token);
        setUser(data.user);
        return null; 
      } else {
        return data.msg || "Registration failed";
      }
    } catch (error) {
      return "An error occurred during sign up";
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const data = await api.login(email, password);
      if (data.token) {
        await SecureStore.setItemAsync('auth_token', data.token);
        setUser(data.user);
        return null; 
      } else {
        return data.msg || "Login failed";
      }
    } catch (error) {
      return "An error occurred during sign in";
    }
  };

  const signOut = async () => {
    await SecureStore.deleteItemAsync('auth_token');
    setUser(null);
  };

  const value = useMemo(
    () => ({ 
        user, 
        isLoadingUser, 
        signUp, 
        signIn, 
        signOut,
        hasSeenIntro: user?.has_seen_intro ?? false,
        isOnboardingComplete: user?.has_set_goals ?? false
    }),
    [user, isLoadingUser]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be inside of the AuthProvider");
  }
  return context;
}