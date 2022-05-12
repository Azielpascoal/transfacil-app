import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Container, HomeText, Image } from "../../components/CustomTabBar";
import { StyleSheet, View,TouchableOpacity } from "react-native";
import Home from "../screens/Home";
import Solicite from "../screens/Solicite";
import Pedidos from "../screens/Pedidos";
import Perfil from "../screens/Perfil";
import HomeIm from "../../assets/icon/location.png"
import SoliciteIm from "../../assets/icon/taxi-driver.png"
import PedidosIm from "../../assets/icon/app.png"
import PerfilIm from "../../assets/icon/perfil.png"

const Tab = createBottomTabNavigator();

export const MoreButtom = ({ onPress, children }) => {
  const [state, setState] = useState(false);
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  return (
    <TouchableOpacity
      style={{
          backgroundColor:"#000",
          width:70,
          height:70,
        top: -15,
        borderRadius:50,
        justifyContent: "center",
        alignItems: "center",
        ...style.shadow,
        fontFamily: "Poppins-Regular",
      }}
      onPress={onPress}
    >
      <View
        style={{
          borderRadius: 35,
          backgroundColor: "#fff",
          border: 1,
          borderColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};
export default () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      showLabel: false,
      style: {
        elevation: 0,
        width:"94%" ,
        alignSelf:"center",
        backgroundColor: "#ffffff",
        bottom:5 ,
        height: 60,
        ...style.shadow,
        alignItems: "center",
        borderRadius:15,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => (
          <Container
            style={{
              width: 45,
              height: 45,
              backgroundColor: focused ? "#EF9E30" : "#fff",
              borderRadius: 12,
            }}
          >
            <Image
              source={HomeIm}
              style={{tintColor:focused ? "#fff" : "#EF9E30"}}
            />
          </Container>
        ),
      }}
    />
    <Tab.Screen
      name="Pedidos"
      component={Pedidos}
      options={{
        tabBarIcon: ({ focused }) => (
          <Container
            style={{
              width: 45,
              height: 45,
              backgroundColor: focused ? "#EF9E30" : "#fff",
              borderRadius: 12,
            }}
          >
            <Image
              source={PedidosIm}
              style={{tintColor:focused ? "#fff" : "#EF9E30"}}
            />
          </Container>
        ),
      }}
    />
  
    <Tab.Screen
      name="Solicite"
      component={Solicite}
      options={{
        tabBarIcon: ({ focused }) => (
          <Container
            style={{
              width: 45,
              height: 45,
              backgroundColor: focused ? "#EF9E30" : "#fff",
              borderRadius: 12,
            }}
          >
            <Image
              source={SoliciteIm}
              style={{tintColor:focused ? "#fff" : "#EF9E30"}}
            />
          </Container>
        ),
      }}
    />
      
    <Tab.Screen
      name="Perfil"
      component={Perfil}
      options={{
        tabBarIcon: ({ focused }) => (
          <Container
            style={{
              width: 45,
              height: 45,
              backgroundColor: focused ? "#EF9E30" : "#fff",
              borderRadius: 12,
            }}
          >
            <Image
              source={PerfilIm}
              style={{tintColor:focused ? "#fff" : "#EF9E30"}}
            />
          </Container>
        ),
      }}
    />
    
   
  </Tab.Navigator>
);
const style = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 3,
      height: 0,
    },
    shadowRadius: 30,
    shadowOpacity: 0.12,
    elevation: 12,
  },
});