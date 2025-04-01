import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loadLoginState = async () => {
      try {
        const value = await AsyncStorage.getItem("isLoggedIn");
        console.log("Loaded login state:", value);
        if (value !== null) {
          setIsLoggedIn(JSON.parse(value));
          console.log("Set isLoggedIn to:", JSON.parse(value));
        }
      } catch (error) {
        console.error("Lỗi lấy trạng thái:", error);
      }
    };
    loadLoginState();
  }, []);

  const saveLoginState = async (value) => {
    try {
      console.log("Saving login state:", value);
      await AsyncStorage.setItem("isLoggedIn", JSON.stringify(value));
      setIsLoggedIn(value);
      console.log("Updated isLoggedIn to:", value);
    } catch (error) {
      console.error("Lỗi lưu trạng thái:", error);
    }
  };

  return { isLoggedIn, saveLoginState };
};

export default useAuth;
