// styles/colors.ts

export const lightTheme = {
    primary: "#FF9600", // bright orange for main accents
    secondary: "#C2D74D", // fresh green
    background: "#FAF9F6", // off-white
    surface: "#EFE5D2", // cards, secondary background
    textPrimary: "#2F2F2F",
    textSecondary: "#666666",
    border: "#E0E0E0",
    white: "#FFFFFF",
  };

  export const darkTheme = {
    primary: "#FF7A00", // darker, warmer orange
    secondary: "#7A9637", // muted green
    background: "#1A1A1A",
    surface: "#2F2F2F",
    textPrimary: "#E6E6E6",
    textSecondary: "#B9AE99",
    border: "#333333",
    white: "#FFFFFF",
  };
  
  // Optional: default export for easy import
  export const colors = {
    light: lightTheme,
    dark: darkTheme,
  };