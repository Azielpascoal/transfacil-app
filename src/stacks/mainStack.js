import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Preload from "../screens/Preload";
import MainLogin from "../client/stacks/mainLogin"
import MainLoginTaxista from  "../taxist/stacks/mainLogin"
import Home from "../screens/Home"
import MainTabClient from "../client/stacks/mainTab";

const Stack = createStackNavigator();

export default()=>{
    return(
        <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
          headerShown: false,
        }}
        >
            <Stack.Screen name="Preload" component={Preload}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="MainLogin" component={MainLogin}/>
            <Stack.Screen name="MainLoginTaxista" component={MainLoginTaxista}/>
            <Stack.Screen name="MainTabClient" component={MainTabClient}/>
        </Stack.Navigator>
    );
}