import React from "react";
import { View, Text, Image } from "react-native";
import { useRouter } from "expo-router";;
import { useColorScheme } from "react-native";
import { colors } from "@/styles/colors"; // you already have this file
import { headerStyle } from "@/styles/headerStyle";



export default function Header() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const themeColors = colorScheme === 'dark' ? colors.dark : colors.light;

    return (
        <View style={[headerStyle.head, { backgroundColor: themeColors.secondary, shadowColor: themeColors.primary }]}>
            <Image
        source={require('../../assets/images/headerstep.png')}
        style={headerStyle.logoImage}
      />
        </View>
    );
}

