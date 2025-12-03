import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import { lightTheme } from "./styles/colors";
import { splashStyle } from "./styles/splashStyle";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/onboarding/step1"); // lowercase paths = good practice
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={[lightTheme.secondary, lightTheme.surface, lightTheme.primary]}
      style={splashStyle.container}
    >
      <Image
        source={require("../assets/images/splash.png")}
        style={splashStyle.image}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});
