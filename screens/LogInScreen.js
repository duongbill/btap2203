import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  const handleLogin = async () => {
    try {
      // Validate inputs
      if (!email || !password) {
        Alert.alert("Error", "Please fill in all fields");
        return;
      }

      // Get users from storage
      const existingUsers = await AsyncStorage.getItem("users");
      if (!existingUsers) {
        Alert.alert("Error", "No registered users found");
        return;
      }

      const users = JSON.parse(existingUsers);

      // Find user with matching email and password
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        // Store current user info
        await AsyncStorage.setItem("currentUser", JSON.stringify(user));

        // Navigate to Home screen
        navigation.navigate("Select");
      } else {
        Alert.alert("Error", "Invalid email or password");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Logo */}
        <Image source={require("../assets/carrot.png")} style={styles.logo} />

        {/* Title */}
        <Text style={styles.title}>Loging</Text>
        <Text style={styles.subtitle}>Enter your emails and password</Text>

        {/* Form */}
        <View style={styles.formContainer}>
          {/* Email Input */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
              placeholder="imshuvo97@gmail.com"
              placeholderTextColor="#333"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                value={password}
                onChangeText={setPassword}
                style={[styles.input, styles.passwordInput]}
                secureTextEntry={secureText}
                placeholder="• • • • • • • •"
                placeholderTextColor="#333"
              />
              <TouchableOpacity
                onPress={() => setSecureText(!secureText)}
                style={styles.eyeButton}
              >
                <Image
                  source={require("../assets/eye.png")}
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          {/* Signup Link */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.signupLink}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 40,
  },
  logo: {
    width: 48,
    height: 56,
    resizeMode: "contain",
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "#181725",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: "#7C7C7C",
    marginBottom: 40,
  },
  formContainer: {
    flex: 1,
  },
  inputWrapper: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: "#7C7C7C",
    marginBottom: 10,
  },
  input: {
    fontSize: 18,
    color: "#181725",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },
  passwordInput: {
    flex: 1,
    borderBottomWidth: 0,
  },
  eyeButton: {
    padding: 10,
  },
  eyeIcon: {
    width: 22,
    height: 22,
    tintColor: "#7C7C7C",
  },
  forgotContainer: {
    alignSelf: "flex-end",
    marginBottom: 30,
  },
  forgotText: {
    fontSize: 14,
    color: "#181725",
  },
  loginButton: {
    backgroundColor: "#53B175",
    borderRadius: 19,
    height: 67,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  loginButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    fontSize: 14,
    color: "#181725",
  },
  signupLink: {
    fontSize: 14,
    color: "#53B175",
    fontWeight: "600",
  },
});

export default LoginScreen;
