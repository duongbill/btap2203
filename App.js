import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import useAuth from "./context/useAuth";
import AuthStack from "./navigation/AuthStack";
import MainStack from "./navigation/MainStack";

const AppNavigator = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default function App() {
  return <AppNavigator />;
}
