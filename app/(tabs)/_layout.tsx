// app/(tabs)/_layout.tsx
import { Tabs, Redirect } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: "Home" }} />
     
      <Redirect href="/(tabs)/home" />
    </Tabs>
  );
}