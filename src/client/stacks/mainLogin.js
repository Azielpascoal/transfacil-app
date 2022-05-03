import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import SignIn from "../screens/loginScreens/SignIn";
import SignUp from "../screens/loginScreens/SignUp";
import MainTab from "./mainTab";

const Stack = createStackNavigator();

export default()=>{
    return(
        <Stack.Navigator
        initialRouteName="MainTab"
        screenOptions={{
          headerShown: false,
        }}
        >
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="MainTab" component={MainTab}/>
        </Stack.Navigator>
    );
}