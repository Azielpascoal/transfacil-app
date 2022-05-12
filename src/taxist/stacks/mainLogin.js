import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import SignIn from "../screens/loginScreens/SignIn";
import SignUp from "../screens/loginScreens/SignUp";
import SignUpC from "../screens/loginScreens/SignUpC";
import SignUpCarro from "../screens/loginScreens/SignUpCarro";
import MainTab from "./mainTab";

const Stack = createStackNavigator();

export default()=>{
    return(
        <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
        }}
        >
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="SignUpC" component={SignUpC}/>
            <Stack.Screen name="SignUpCarro" component={SignUpCarro}/>
            <Stack.Screen name="MainTab" component={MainTab}/>
        </Stack.Navigator>
    );
}