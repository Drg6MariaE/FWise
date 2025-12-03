import Header from "@/frontend/app/components/ui/header";
import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Stack.Screen name="step1" />
      <Stack.Screen name="step2" />
      <Stack.Screen name="step3" />
      <Stack.Screen name="setup" />
      <Stack.Screen name="setup2" />
      <Stack.Screen name="setup3" />
      <Stack.Screen
        name="transition"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
