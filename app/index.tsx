import React, { useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { splashStyle } from "../styles/splashStyle";
import{ lightTheme, darkTheme as colors } from "../styles/colors";

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