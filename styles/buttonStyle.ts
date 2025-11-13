import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const buttonStyle = StyleSheet.create({
    buttonContainer: {
      zIndex: 1,
      position: "absolute",
      bottom: 90,
      alignSelf: "center",
      backgroundColor: colors.light.primary,
      borderRadius: 12,
      paddingVertical: 14,
      paddingHorizontal: 40,
      shadowColor: colors.light.primary,
      shadowOpacity: 0.4,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 6 },
    },
    buttonText: {
      fontSize: 16,
      fontWeight: "600",
      color: "#000",
    },
  });
  
