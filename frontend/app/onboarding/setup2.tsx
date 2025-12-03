import { setup2Style as s } from "@/frontend/app/styles/setup2Style";
import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const Setup2 = () => {
  const [sliderValue, setSliderValue] = useState(12);
  const hours = Math.floor(sliderValue);
  const minutes = Math.round((sliderValue % 1) * 60);
  const formatted = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
  const [meals, setMeals] = useState<string | null>(null);
  const [timing, setTiming] = useState<string | null>(null);
  const [priority, setPriority] = useState<string | null>(null);

  return (
    <View style={s.container}>
      <LinearGradient
        colors={["#EFE5D2", "#FAF9F6"]}
        style={s.gradient}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      <ScrollView>
        <TouchableOpacity onPress={() => router.push("/onboarding/setup3")}>
          <Text style={s.maybeLater}>Next</Text>
        </TouchableOpacity>
        <Text style={s.stepText}>Step 2 of 3: Set Your Goals</Text>

        <View style={s.contentWrapper}>
          <Text style={s.pageTitle}>Your Lifestyle Preferences</Text>
          <Text style={s.pageSubtitle}>
            Help us customize Forkwise around your daily habits.
          </Text>

          <Text style={s.sectionTitle}>How many meals do you usually eat?</Text>

          <TouchableOpacity style={s.checkboxRow} onPress={() => setMeals("2")}>
            <View style={[s.checkbox, meals === "2" && s.checkboxChecked]} />
            <Text style={s.checkboxLabel}>2 meals</Text>
          </TouchableOpacity>

          <TouchableOpacity style={s.checkboxRow} onPress={() => setMeals("3")}>
            <View style={[s.checkbox, meals === "3" && s.checkboxChecked]} />
            <Text style={s.checkboxLabel}>3 meals</Text>
          </TouchableOpacity>

          <TouchableOpacity style={s.checkboxRow} onPress={() => setMeals("4")}>
            <View style={[s.checkbox, meals === "4" && s.checkboxChecked]} />
            <Text style={s.checkboxLabel}>4+ smaller meals</Text>
          </TouchableOpacity>

          <Text style={s.sectionTitle}>When do you usually eat?</Text>

          <TouchableOpacity
            style={s.checkboxRow}
            onPress={() => setTiming("early")}
          >
            <View
              style={[s.checkbox, timing === "early" && s.checkboxChecked]}
            />
            <Text style={s.checkboxLabel}>Early (7am–7pm)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={s.checkboxRow}
            onPress={() => setTiming("late")}
          >
            <View
              style={[s.checkbox, timing === "late" && s.checkboxChecked]}
            />
            <Text style={s.checkboxLabel}>Late Start (10am–10pm)</Text>
          </TouchableOpacity>

          <View style={s.sliderContainer}>
            <View style={s.sliderLabelRow}>
              <Text style={s.sliderLabel}>Preferred meal time</Text>
              <Text style={s.sliderValue}>{formatted}</Text>
            </View>

            <Slider
              minimumValue={6}
              maximumValue={22}
              step={0.01}
              value={sliderValue}
              onValueChange={(v) => setSliderValue(v)}
              minimumTrackTintColor="#FF7A00"
              maximumTrackTintColor="#ccc"
              thumbTintColor="#FF7A00"
            />
          </View>

          <Text style={s.sectionTitle}>What’s your #1 priority?</Text>

          <TouchableOpacity
            style={s.checkboxRow}
            onPress={() => setPriority("healthy")}
          >
            <View
              style={[s.checkbox, priority === "healthy" && s.checkboxChecked]}
            />
            <Text style={s.checkboxLabel}>Healthy meals</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={s.checkboxRow}
            onPress={() => setPriority("sugarFree")}
          >
            <View
              style={[
                s.checkbox,
                priority === "sugarFree" && s.checkboxChecked,
              ]}
            />
            <Text style={s.checkboxLabel}>Sugar-free</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={s.checkboxRow}
            onPress={() => setPriority("budget")}
          >
            <View
              style={[s.checkbox, priority === "budget" && s.checkboxChecked]}
            />
            <Text style={s.checkboxLabel}>Budget-friendly</Text>
          </TouchableOpacity>

          <Text style={s.footerText}>
            You can update these anytime in Settings.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Setup2;
