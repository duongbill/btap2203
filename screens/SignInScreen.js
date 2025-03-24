import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Hình ảnh túi hàng */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/grocery-bag.png")} // Đường dẫn đến hình túi hàng
            style={styles.image}
          />
        </View>
        {/* Nội dung bên dưới hình ảnh */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Get your groceries with nectar</Text>
          <View style={styles.countryContainer}>
            <Image
              source={{ uri: "https://flagcdn.com/w40/bd.png" }} // Cờ Bangladesh
              style={styles.flag}
            />
            <Text style={styles.countryCode}>+880</Text>
          </View>
          <Text style={styles.orText}>Or connect with social media</Text>
          <TouchableOpacity style={[styles.button, styles.googleButton]}>
            <Text style={styles.buttonText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.facebookButton]}
            onPress={() => navigation.navigate("Number")}
          >
            <Text style={styles.buttonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 0, // Đưa hình ảnh sát lề trên
  },
  image: {
    width: "100%",
    height: 300, // Giảm chiều cao để phù hợp hơn
    resizeMode: "contain",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginVertical: 10, // Giảm khoảng cách
  },
  countryContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F3F4",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginVertical: 15,
    alignSelf: "stretch", // Kéo dài hết chiều ngang
    width: "100%", // Đảm bảo full width
  },

  flag: {
    width: 25,
    height: 18,
    marginRight: 8,
  },
  countryCode: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
  },
  orText: {
    fontSize: 16,
    color: "#888",
    marginVertical: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 30, // Bo góc mềm mại
    marginVertical: 8,
    width: "90%", // Giảm chiều rộng để đẹp hơn
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Tạo hiệu ứng nổi
  },
  googleButton: {
    backgroundColor: "#4285F4",
  },
  facebookButton: {
    backgroundColor: "#3B5998",
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SignInScreen;
