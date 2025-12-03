import CustomButton from "@/frontend/app/components/ui/button";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { lightTheme } from "../styles/colors";
import { transitionStyle } from "../styles/transitionStyle";
import { useAuth } from "../lib/auth-context"; 


export default function transition() {
  const router = useRouter();
  const { updateUserStatus } = useAuth();

  const handleContinue = async () => {
    // 1. Tell backend: Goals are set!
    await updateUserStatus({ has_set_goals: true });
    
    // 2. The _layout.tsx RouteGuard will automatically see the change 
    //    and redirect to /(tabs)/home, but we can force it too.
    router.replace("/(tabs)/home");
  };


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
          onPress={handleContinue} // Use the new handler
        />
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({});
