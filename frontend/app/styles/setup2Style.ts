import { StyleSheet } from "react-native";
import { lightTheme as colors } from "./colors";

export const setup2Style = StyleSheet.create({
    
    button: {
        backgroundColor: "#FF9600",
        marginTop: 15,
        shadowColor: "#FF9600",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 5,
      },
    
    container: {
        flex: 1,
        backgroundColor: "#FAF9F6",
        overflow: "hidden",
      },
    
      gradient: {
        ...StyleSheet.absoluteFillObject,
      },
      maybeLater: {
        position: "absolute",
        top: 25,
        right: 20,
        fontSize: 16,
        fontWeight: "700",
        color: "#000",
      },
    
      stepText: {
        position: "absolute",
        top: 60,
        textAlign: "left",
        left: 35,
        fontSize: 16,
        color: "#757575",
      },
    
      contentWrapper: {
        flex: 1,
        marginTop: 45,
        paddingHorizontal: 35,
      },
    
      pageTitle: {
        fontSize: 24,
        fontWeight: "600",
        textAlign: "left",
        color: "#000",
        marginTop: 50,
      },
    
      pageSubtitle: {
        fontSize: 16,
        textAlign: "left",
        paddingHorizontal: 5,
        color: "#000",
        marginBottom: 10,
      },
    
      sectionTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#000",
        marginBottom: 10,
        marginTop: 5,
      },
    
      checkboxRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8,
      },
      checkboxChecked: {
        backgroundColor: colors.secondary,
      },
      checkbox: {
        width: 20,
        height: 20,
        backgroundColor: "#FF7A00",
        borderRadius: 5,
        marginRight: 12,
      },
    
      checkboxLabel: {
        fontSize: 16,
        color: "#1E1E1E",
      },
    
      sliderContainer: {
        marginTop: 20,
        paddingHorizontal: 25,
      },
    
      sliderLabelRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 2,
      },
    
      sliderLabel: {
        fontSize: 16,
        color: "#1E1E1E",
      },
    
      sliderValue: {
        fontSize: 16,
        color: "#1E1E1E",
      },
    
      footerText: {
        textAlign: "center",
        fontSize: 16,
        color: "#757575",
        marginTop: 20,
      },
});