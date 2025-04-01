import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import useAuth from "./context/useAuth";
import AuthStack from "./navigation/AuthStack";
import MainStack from "./navigation/MainStack";

const AppNavigator = () => {
  const { isLoggedIn } = useAuth();
  console.log("App.js - Current isLoggedIn state:", isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default function App() {
  return <AppNavigator />;
}
