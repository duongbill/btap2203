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

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  const handleSignUp = async () => {
    try {
      // Validate inputs
      if (!username || !email || !password) {
        Alert.alert("Error", "Please fill in all fields");
        return;
      }

      // Create user object
      const userData = {
        username,
        email,
        password,
      };

      // Get existing users or initialize empty array
      const existingUsers = await AsyncStorage.getItem("users");
      let users = [];
      if (existingUsers) {
        users = JSON.parse(existingUsers);
      }

      // Check if email already exists
      const emailExists = users.some((user) => user.email === email);
      if (emailExists) {
        Alert.alert("Error", "Email already registered");
        return;
      }

      // Add new user
      users.push(userData);

      // Save updated users array
      await AsyncStorage.setItem("users", JSON.stringify(users));

      Alert.alert("Success", "Registration successful!", [
        {
          text: "OK",
          onPress: () => navigation.navigate("LogIn"),
        },
      ]);
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
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Enter your credentials to continue</Text>

        {/* Form */}
        <View style={styles.formContainer}>
          {/* Username Input */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              value={username}
              onChangeText={setUsername}
              style={styles.input}
              placeholder="Afsar Hossen Shuvo"
              placeholderTextColor="#333"
            />
          </View>

          {/* Email Input */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.emailContainer}>
              <TextInput
                value={email}
                onChangeText={setEmail}
                style={[styles.input, { flex: 1, marginRight: 15 }]}
                keyboardType="email-address"
                placeholder="imshuvo97@gmail.com"
                placeholderTextColor="#333"
              />
              <Image
                source={require("../assets/check.png")}
                style={styles.checkIcon}
              />
            </View>
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

          {/* Terms and Policy */}
          <Text style={styles.termsText}>
            By continuing you agree to our{" "}
            <Text style={styles.linkText}>Terms of Service</Text> and{" "}
            <Text style={styles.linkText}>Privacy Policy</Text>
          </Text>

          {/* Sign Up Button */}
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>

          {/* Login Link */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
              <Text style={styles.loginLink}>Login</Text>
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
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },
  checkIcon: {
    width: 20,
    height: 20,
    tintColor: "#53B175",
    marginRight: 10,
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
  termsText: {
    fontSize: 14,
    color: "#7C7C7C",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 20,
  },
  linkText: {
    color: "#53B175",
    fontWeight: "600",
  },
  signUpButton: {
    backgroundColor: "#53B175",
    borderRadius: 19,
    height: 67,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  signUpButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontSize: 14,
    color: "#181725",
  },
  loginLink: {
    fontSize: 14,
    color: "#53B175",
    fontWeight: "600",
  },
});

export default SignUpScreen;
