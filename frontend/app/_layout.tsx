import { AuthProvider, useAuth } from "@/frontend/app/lib/auth-context";
import { Stack, useRouter, useSegments } from "expo-router";
import React, { useEffect } from "react";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, isLoadingUser } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    if (isLoadingUser) return;

    const inAuthGroup = segments[0] === "auth";
    const inOnboarding = segments[0] === "onboarding";

    // If NOT logged in → allow onboarding and auth
    if (!user && !isLoadingUser) {
      if (!inAuthGroup && !inOnboarding) {
        router.replace("/onboarding/step1");
      }
    }

    // Allow onboarding screens until onboarding is finished
    if (user && inAuthGroup) {
      router.replace("/onboarding/setup");
    }
  }, [user, segments, isLoadingUser]);

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RouteGuard>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="onboarding" />
          <Stack.Screen name="auth" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </RouteGuard>
    </AuthProvider>
  );
}
