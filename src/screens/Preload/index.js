import React,{useEffect} from "react";
import {Container,LogoLoad,LogoIm,Text,InfoArea} from "./style"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {useNavigation} from "@react-navigation/native"
import AppStyle from "../../AppStyle"
import Top from "../../components/Top/headertop"
import {ActivityIndicator} from "react-native"

export default()=>{
    const navigation = useNavigation();
    const checkToken = async()=>{
        const verifyToken = await AsyncStorage.getItem("@token");
        if(verifyToken){
            console.log("token...:aceite");
            navigation.reset({
              routes:[{name:"MainTabClient"}]
            })
        }
        else{
            navigation.reset({
                routes:[{name:"Home"}]
            })
          console.log("token...:n aceite");
        }
      }
      useEffect(() => {
       
      },[])
    useEffect(() => {
        setTimeout(() => {
            checkToken()
        }, 4000);
        
    },[])
    return(
        <Container>
            <Top/>
            {/* <LogoIm source={AppStyle.imageSet.logo}/> */}
            <LogoLoad source={AppStyle.imageSet.PreloadIm}/>
            <InfoArea>
                <Text>Olá seja bem-vindo ao TransFácil, já estamos a começar espere um momento...</Text>
            </InfoArea>
            <ActivityIndicator size="large" color="#EF9E30" />
        </Container>
    );
}
