import { StyleSheet } from "react-native";
import { lightTheme as colors } from "./colors";

export const setupStyle = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
    
      // gradient box that mimics the Swift view
      gradientBox: {
        width: "90%",
        height: "85%",
        backgroundColor: "transparent",
        borderRadius: 50, // matches view.layer.cornerRadius = 50
        overflow: "hidden", // ensures corners are rounded properly
        padding: 24,
      },
    
      title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#000",
        marginBottom: 10,
      },
      subtitle: {
        fontSize: 14,
        color: "#555",
        marginBottom: 15,
        fontWeight: "700",
      },
      subtitle2: {
        fontSize: 14,
        color: "#555",
        marginBottom: 10,
      },
      option: {
        backgroundColor: "#FFF",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
      },
      selected: {
        backgroundColor: "#FF9600",
      },
      optionText: {
        fontSize: 16,
        color: "#000",
      },
      selectedText: {
        color: "#FFF",
      },
    });