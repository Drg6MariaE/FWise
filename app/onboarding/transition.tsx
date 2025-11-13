import React, { useEffect } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { transitionStyle } from "../../styles/transitionStyle";
import { lightTheme } from "../../styles/colors";
import CustomButton from "@/components/ui/button";

export default function transition() {
  const router = useRouter();

  return (
    <>
      <LinearGradient
        colors={[lightTheme.secondary, lightTheme.surface, lightTheme.primary]}
        style={transitionStyle.container}
      >
          <Image
            source={require("../../assets/images/splash.png")}
            style={transitionStyle.image}
          />
        <View style={transitionStyle.wrap}>
          <Text style={transitionStyle.title}>Your profile is ready</Text>
          <Text style={transitionStyle.subtitle}>
            We’ve tailored Forkwise to your preferences. Let’s start building
            your first smart meal plan.
          </Text>
        </View>
        <Text style={transitionStyle.footerText}>
            You can update these anytime in Settings.
          </Text>
          <CustomButton
        title="Continue"
        style={{
          marginHorizontal: 20,
          marginBottom: 95,
          backgroundColor: "#0D0D0D",
        }}
        textStyle={{
          color: "#FF8A00",
        }}
        onPress={() => router.replace("/home")}
      />
      </LinearGradient>

       
    </>
  );
}

const styles = StyleSheet.create({});
