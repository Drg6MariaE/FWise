import CustomButton from "@/frontend/app/components/ui/button";
import { setup3Style } from "@/frontend/app/styles/setup3Style";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const GOALS = [
  "Dairy-free",
  "Gluten-free",
  "Nut-free",
  "Soy-free",
  "No seafood",
  "Vegetarian",
  "Vegan",
];

export default function Setup3() {
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
      style={setup3Style.container}
    >
      <View style={setup3Style.gradientBox}>
        <Text style={setup3Style.title}>Any dietary restrictions?</Text>
        <Text style={setup3Style.subtitle}>
          Let us know so we can avoid meals that don’t fit your needs.
        </Text>
        <Text style={setup3Style.subtitle2}>Step 3 of 3: Set Your Goals</Text>

        <FlatList
          data={GOALS}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                setup3Style.option,
                selected.includes(item) && setup3Style.selected,
              ]}
              onPress={() => toggleGoal(item)}
            >
              <Text
                style={[
                  setup3Style.optionText,
                  selected.includes(item) && setup3Style.selectedText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <CustomButton
          title="Finish Setup"
          onPress={() => router.replace("/onboarding/transition")}
        />
      </View>
    </LinearGradient>
  );
}
