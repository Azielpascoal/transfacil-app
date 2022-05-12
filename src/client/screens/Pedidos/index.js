import React,{useEffect,useState} from "react"
import {Container,SearchArea} from "./style"
import { useNavigation } from "@react-navigation/native"
import {StyleSheet,Alert} from "react-native"
import {ActivityIndicator} from "react-native"
import Card from "../../../components/Card/card"
import Input from "../../../components/Input/input"
import Top from "../../../components/Top/headertop";
import SearchIm from "../../../assets/icon/lupa.png"
import API from "../../../service/api";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useApplication } from "../../../context/application"


export default()=>{
  const navigation= useNavigation();
  const {idUser,token}= useApplication();
  const [taxista,setTaxista]=useState();
  const [codeUser,setCodUser]=useState();
  const getUser = async () => {
    const verifyToken = await AsyncStorage.getItem("@token");
    if (verifyToken) {
      let json = await API.getTaxista(verifyToken);
      if (json.erro !=true) {
        console.log("Dados=>", json.taxistas);
        setTaxista(json.taxistas)
       
      } else {
        console.log("DADOS ERRO=>", json);
        navigation.reset({
          routes: [{ name: "MainLogin" }],
        });
      
    }
  }
  };
  console.log("tettt:",taxista)
  useEffect(() => {
    getUser();
   
  }, []);

    return(
        <Container>
            <Top/>
            <SearchArea>
                <Input placeholder="Pesquise por sua localidade?" source={SearchIm}/>
            </SearchArea>
            {
              taxista==undefined ?(
                <ActivityIndicator size="large" color="#EF9E30" />
              ):

              taxista.map((e,i)=>(
                <Card
                key={i}
                nameCard={e.tipo_de_conta}
                nameUser={e.nome_cliente}
                espacamento={e.espacamento}
                marca={e.marca}
                modelo={e.modelo}
                cor={e.cor}
                matricula={e.matricula}
                horario={e.horario}
                inicio={e.p_inicial}
                onChangeText={t=>setCodUser(t)}
                value={codeUser}
                fim={e.p_final}
                onPress={async()=>{
                  let json = await API.createRserva(token,codeUser,idUser,e.id);
                  if (json) {
                    console.log("Dados", json);
                    Alert.alert("Reserva !","Reserva feita com sucesso 😀")
                    navigation.reset({
                      routes: [{ name: "Home" }],
                    });
                  } else {
                    console.log("Dados", json);
                    Alert.alert("Atenção !","Ups ocorreu um erro !")
                  }
            }}
                 style={{...style.shadow}}/>
              ))
            }
           
            
        </Container>
    );
}
const style = StyleSheet.create({
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 2,
        height: 8,
      },
      shadowRadius: 3.5,
      shadowOpacity: 0.3,
      elevation: 18,
    },
    buttom: {
      paddingLeft: 10,
    },
  });