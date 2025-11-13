import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { setupStyle } from "@/styles/setupStyle";
import CustomButton from "@/components/ui/button";
import { useRouter, router } from "expo-router";

const GOALS = [
  "Sugar-free",
  "Gluten-free",
  "Vegan",
  "Budget-friendly",
  "High-protein",
  "Weight loss",
  "Muscle gain",
];

export default function SetupScreen() {
  const [selected, setSelected] = useState<string[]>([]);
  const router = useRouter();

  const toggleGoal = (goal: string) => {
    setSelected((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  return (
    <LinearGradient
      colors={["#EFE5D2", "#FAF9F6"]} // matches the Swift colors
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={setupStyle.container}
    >
  <View style={setupStyle.gradientBox}>
    <Text style={setupStyle.title}>Profile Setup</Text>
    <Text style={setupStyle.subtitle}>
    Tell us about your goals so we can tailor your meals just for you.
    </Text>
    <Text style={setupStyle.subtitle2}>
    Step 1 of 3: Set Your Goals
    </Text>

    <FlatList
      data={GOALS}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            setupStyle.option,
            selected.includes(item) && setupStyle.selected,
          ]}
          onPress={() => toggleGoal(item)}
        >
          <Text
            style={[
              setupStyle.optionText,
              selected.includes(item) && setupStyle.selectedText,
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />
  </View>
  <View style={{  justifyContent: "center", alignItems: "center", marginTop: 30 }}>
      <CustomButton
        title="Continue"
        onPress={() => router.replace("/onboarding/setup2")}
      />
    </View>
    </LinearGradient>
  );
}
