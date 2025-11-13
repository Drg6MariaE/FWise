import { useRef, useEffect } from "react";
import { View, Text, Animated } from "react-native";
import { useRouter } from "expo-router";
import CustomButton from "@/components/ui/button";
import { LinearGradient } from "expo-linear-gradient";
import { step3Style } from "@/styles/step3Style";

export default function Step3() {
  const scaleCircle1 = useRef(new Animated.Value(0)).current;
  const translateCircle1 = useRef(
    new Animated.ValueXY({ x: 0, y: 300 })
  ).current;

  const translateText = useRef(new Animated.Value(-300)).current;
  const router = useRouter();

  useEffect(() => {
    return Animated.parallel([
      Animated.timing(scaleCircle1, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(translateCircle1, {
        toValue: { x: 0, y: 0 },
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(translateText, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <>
      <LinearGradient
        colors={["#EFE5D2", "#F6EAD2"]}
        style={step3Style.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Animated.View
          style={[
            step3Style.bgCircle1,
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
            step3Style.orange,
            { transform: [{ translateY: translateText }] },
          ]}
        >
          <Text style={step3Style.title2}>What you’ll do in Forkwise</Text>
          <Text style={step3Style.bull}>• Add or generate meals</Text>
          <Text style={step3Style.bull}>• See your daily nutrition</Text>
          <Text style={step3Style.bull}>• Discover local healthy spots</Text>
          <Text style={step3Style.bull}>
            • Track progress toward your goals
          </Text>
        </Animated.View>
        <Animated.View
          style={[
            step3Style.green,
            {
              transform: [
                { translateX: translateCircle1.x },
                { translateY: translateCircle1.y },
                { scale: scaleCircle1 },
              ],
            },
          ]}
        >
          <Text style={step3Style.title}>Let’s personalize your plan</Text>
          <Text style={step3Style.label}>
            Create your Forkwise profile to get:
          </Text>
          <Text style={step3Style.bullet}>
            • Smart meal suggestions tailored to your diet
          </Text>
          <Text style={step3Style.bullet}>
            • Tracking insights based on your goals
          </Text>
          <Text style={step3Style.bullet}>
            • Restaurant tips based on where you are
          </Text>
        </Animated.View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <CustomButton
            title="Let's Start"
            onPress={() => {
              console.log("Navigating to /auth");
              router.replace("/auth");
            }}
          />
        </View>
      </LinearGradient>
    </>
  );
}
