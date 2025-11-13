import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { buttonStyle } from "@/styles/buttonStyle";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
};

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity
      style={[buttonStyle.buttonContainer, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[buttonStyle.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
