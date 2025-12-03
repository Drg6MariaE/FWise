import CustomButton from "@/frontend/app/components/ui/button";
import { step2Style } from "@/frontend/app/styles/step2Style";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";

export default function Step2() {
  const router = useRouter();
  const scaleCircle1 = useRef(new Animated.Value(0)).current;
  const translateCircle1 = useRef(
    new Animated.ValueXY({ x: 0, y: -300 })
  ).current;
  const translateText = useRef(new Animated.Value(-300)).current;

  useEffect(() => {
    Animated.parallel([
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
        style={step2Style.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Animated.View
          style={[
            step2Style.bgCircle1,
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
            step2Style.orange,
            { transform: [{ translateY: translateText }] },
          ]}
        >
          <Text style={step2Style.title}>Built for real life.</Text>
          <Text style={step2Style.bullet}>• Meal tracking made effortless</Text>
          <Text style={step2Style.bullet}>
            • AI meal suggestions based on your preferences
          </Text>
          <Text style={step2Style.bullet}>
            • Nearby healthy restaurants, mapped
          </Text>
          <Text style={step2Style.bullet}>
            • Charts, reminders, and habit-friendly logging
          </Text>
        </Animated.View>
        <View style={step2Style.whyUsContainer}>
          <Text style={step2Style.whyUsTitle}>Why Forkwise?</Text>
          <Text style={step2Style.whyUsBullet}>
            • Private by design — your data stays yours
          </Text>
          <Text style={step2Style.whyUsBullet}>
            • Built for mobile — perfect for life on the go
          </Text>
          <Text style={step2Style.whyUsBullet}>
            • Backed by real food knowledge + AI smarts
          </Text>
          <Text style={step2Style.whyUsBullet}>
            • Works globally (budget + local restaurants)
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <CustomButton
            title="Next"
            onPress={() => router.push("/onboarding/step3")}
          />
        </View>
      </LinearGradient>
    </>
  );
}
