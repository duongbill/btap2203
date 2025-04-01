import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Load trạng thái đăng nhập khi component mount
    loadLoginState();
  }, []);

  const loadLoginState = async () => {
    try {
      const value = await AsyncStorage.getItem("isLoggedIn");
      if (value !== null) {
        setIsLoggedIn(JSON.parse(value));
      }
    } catch (error) {
      console.error("Lỗi khi load trạng thái đăng nhập:", error);
    }
  };

  const saveLoginState = async (value) => {
    try {
      await AsyncStorage.setItem("isLoggedIn", JSON.stringify(value));
      setIsLoggedIn(value);
    } catch (error) {
      console.error("Lỗi khi lưu trạng thái đăng nhập:", error);
    }
  };

  return { isLoggedIn, saveLoginState };
};

export default useAuth;
