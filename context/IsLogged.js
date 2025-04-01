import React from "react";
import { View, Text, Button } from "react-native";
import useAuth from "./useAuth";

const App = () => {
  const { isLoggedIn, saveLoginState } = useAuth();

  return (
    <View>
      <Text>{isLoggedIn ? "Đã đăng nhập" : "Chưa đăng nhập"}</Text>
      <Button title="Đăng nhập" onPress={() => saveLoginState(true)} />
      <Button title="Đăng xuất" onPress={() => saveLoginState(false)} />
    </View>
  );
};

export default App;
