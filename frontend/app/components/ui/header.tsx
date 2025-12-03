import { colors } from "@/frontend/app/styles/colors"; // you already have this file
import { headerStyle } from "@/frontend/app/styles/headerStyle";
import { useRouter } from "expo-router";
import React from "react";
import { Image, useColorScheme, View } from "react-native";
export default function Header() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const themeColors = colorScheme === "dark" ? colors.dark : colors.light;

  return (
    <View
      style={[
        headerStyle.head,
        {
          backgroundColor: themeColors.secondary,
          shadowColor: themeColors.primary,
        },
      ]}
    >
      <Image
        source={require("../../assets/images/headerstep.png")}
        style={headerStyle.logoImage}
      />
    </View>
  );
}
