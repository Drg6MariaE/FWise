import React, {useRef, useEffect} from "react";
import { View, Text, Animated } from "react-native";
import { useRouter } from "expo-router";
import CustomButton from "@/components/ui/button";
import { LinearGradient } from "expo-linear-gradient";
import { step1Style } from "@/styles/step1Style";

export default function Step1() {
  const scaleCircle1 = useRef(new Animated.Value(0)).current;
  const translateCircle1 = useRef(
    new Animated.ValueXY({ x: -200, y: -200 })
  ).current;

  const scaleCircle2 = useRef(new Animated.Value(0)).current;
  const translateCircle2 = useRef(
    new Animated.ValueXY({ x: 200, y: 200 })
  ).current;
  const router = useRouter();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scaleCircle1, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(translateCircle1, {
        toValue: { x: 0, y: 0 },
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleCircle2, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(translateCircle2, {
        toValue: { x: 0, y: 0 },
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <>
    <LinearGradient
    colors={["#EFE5D2", "#C2D74D", "#F6EAD2"]}
    locations={[0, 0.4, 1]} // 0%, 40%, 100%
    style={step1Style.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
  >
          <Animated.View
        style={[
          step1Style.bgCircle1,
          {
            transform: [
              { translateX: translateCircle1.x },
              { translateY: translateCircle1.y },
              { scale: scaleCircle1 },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          step1Style.bgCircle2,
          {
            transform: [
              { translateX: translateCircle2.x },
              { translateY: translateCircle2.y },
              { scale: scaleCircle2 },
            ],
          },
        ]}
      />
            <Animated.View
        style={[
          step1Style.orangeSpace,
          {
            transform: [
              {
                translateX: translateCircle1.x.interpolate({
                  inputRange: [-200, 0],
                  outputRange: [-100, 0],
                  extrapolate: "clamp",
                }),
              },
              {
                translateY: translateCircle1.y.interpolate({
                  inputRange: [-200, 0],
                  outputRange: [-100, 0],
                  extrapolate: "clamp",
                }),
              },
              {
                scale: scaleCircle1.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                  extrapolate: "clamp",
                }),
              },
            ],
            opacity: scaleCircle1,
          },
        ]}
      >
      <View>
        <Text style={[step1Style.title]}>Your path to mindful eating starts here</Text>
        <Text style={[step1Style.label]}>Tell us your goals</Text>
        <Text style={[step1Style.description]}>Sugar-free? Budget-friendly? Vegan? We’ve got you.</Text>
        <Text style={[step1Style.label]}>Get smart meal plans</Text>
        <Text style={[step1Style.description]}>AI builds daily or travel-based plans just for you.</Text>
        <Text style={[step1Style.label]}>Track & thrive</Text>
        <Text style={[step1Style.description]}>Log meals, monitor nutrients, and celebrate progress.</Text>
      </View>
      </Animated.View>
      <Animated.View
        style={[
          step1Style.greenSpace,
          {
            transform: [
              {
                translateX: translateCircle2.x.interpolate({
                  inputRange: [0, 200],
                  outputRange: [0, 100], // Moves from right to center
                  extrapolate: "clamp",
                }),
              },
              {
                translateY: translateCircle2.y.interpolate({
                  inputRange: [-200, 0],
                  outputRange: [-100, 0], // Top to center
                  extrapolate: "clamp",
                }),
              },
              {
                scale: scaleCircle2.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                  extrapolate: "clamp",
                }),
              },
            ],
            opacity: scaleCircle2,
          },
        ]}
      >
        <View>
        <Text style={step1Style.subTitle}>Eat smarter. {"\n"}Live better.</Text>
        <Text style={step1Style.greenDescription}>
          An AI-powered nutrition planner that helps you stay healthy {"\n"}—
          wherever life takes you.
        </Text>
        </View>
      </Animated.View>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <CustomButton
        title="Get Started"
        onPress={() => router.push("/onboarding/step2")}
      />
    </View>
  </LinearGradient>
    </>
  );
}