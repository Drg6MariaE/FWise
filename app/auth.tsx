import { useAuth } from "../lib/auth-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { authStyles } from "../styles/authStyles";
import { LinearGradient } from "expo-linear-gradient";
import Header from "@/components/ui/header";

export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string | null>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const { signIn, signUp } = useAuth();

  const handleAuth = async () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
  
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
  
    setError("");
  
    try {
      if (isSignUp) {
        // ✅ SIGN UP: Create account
        const error = await signUp(email, password);
        if (error) {
          setError(error);
          return;
        }
  
        router.replace("/onboarding/setup");
      } else {
        // ✅ SIGN IN: Log in existing user
        const error = await signIn(email, password);
  
        // ❌ If credentials are wrong or account doesn’t exist
        if (error?.includes("Invalid credentials") || error?.includes("not found")) {
          setError("No account found. Please sign up first.");
          return;
        }
  
        if (error) {
          setError(error);
          return;
        }
  
        router.replace("/(tabs)/home");
      }
    } catch (err) {
      console.error("Authentication failed:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  const handleSwitchMode = () => {
    setIsSignUp((prev) => !prev);
  };
  return (
    <>
      <Header />
      <LinearGradient
        colors={["#FF9600", "#F6EAD2"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={authStyles.container}
      >
        <View style={authStyles.intro}>
          <Text style={authStyles.title}>
            {isSignUp ? "Create Account" : "Sign In to ForkWise!"}
          </Text>
          <Text style={authStyles.subtitle}>
            Plan smarter meals, save your progress, and eat better {"\n"}—
            wherever life takes you.
          </Text>
          <Text style={authStyles.subtitle2}>
            Your data stays private and is used only to improve your experience.
          </Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={authStyles.inputsContainer}
        >
          <View>
            <TextInput
              label="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="example@gmail.com"
              mode="outlined"
              style={authStyles.input}
              onChangeText={setEmail}
            />
            <TextInput
              label="Password"
              autoCapitalize="none"
              keyboardType="email-address"
              mode="outlined"
              secureTextEntry={!showPassword}
              style={authStyles.input}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text style={{ color: "black", marginBottom: 10 }}>
                {showPassword ? "Hide Password" : "Show Password"}
              </Text>
            </TouchableOpacity>
            {error && <Text>{error}</Text>}

            <Button
              style={authStyles.button}
              mode="contained"
              onPress={handleAuth}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
            <Button
              labelStyle={{ color: "black" }}
              mode="text"
              onPress={handleSwitchMode}
            >
              {isSignUp ? (
                <>
                  Already have an account?{" "}
                  <Text style={{ fontWeight: "bold" }}>Sign In</Text>
                </>
              ) : (
                <>
                  Don't have an accoun?{" "}
                  <Text style={{ fontWeight: "bold" }}>Sign Up</Text>
                </>
              )}
            </Button>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({});
