import React from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import MainStack from "./src/stacks/mainStack"

export default (props) => {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
     
        <NavigationContainer>
          <StatusBar style="dark" />
          <MainStack/>
        </NavigationContainer>
    
    );
  }
};