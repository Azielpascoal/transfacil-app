import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Preload from "../screens/Preload";
import MainLogin from "../client/stacks/mainLogin"

const Stack = createStackNavigator();

export default()=>{
    return(
        <Stack.Navigator
        initialRouteName="MainLogin"
        screenOptions={{
          headerShown: false,
        }}
        >
            <Stack.Screen name="Preload" component={Preload}/>
            <Stack.Screen name="MainLogin" component={MainLogin}/>
        </Stack.Navigator>
    );
}