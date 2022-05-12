import React, { useState,useEffect } from "react";
import {
  Container,
  TopoBanner,
  TopoNav,
  TopoNav1,
  TextB,
  TextB1,
  TextB2,
  InputArea,
  InputText,
  TextG,
  InfoArea,
  TopoNav2,
  ImageTrans,
  SecondContainer,
  FacturaSpace,
  LogoutButtom,
  PaymentsText,
} from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, ActivityIndicator ,Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PerfilIm from "../../../assets/icon/perfil.png";
import { useApplication } from "../../../context/application";
import API from "../../../service/api";
import CardReserva from "../../../components/CardReserva/card";
// import Banner from "../../assets/img1.jpg";
// import User from "../../assets/user.png";
// import * as Animatable from "react-native-animatable";
// import { ProgressChart } from "react-native-chart-kit";
// import { useApplication } from "../../context/application";

export default () => {
  const navigation = useNavigation();
  const getUser = async () => {
    const verifyToken = await AsyncStorage.getItem("@token");
    if (verifyToken) {
      let json = await API.getReservaClient(verifyToken, idUser);
      if (json.erro != true) {
        console.log("Dados=>", json.cliente);
        setReserva(json.cliente);
      } else {
        console.log("DADOS ERRO=>", json);
        navigation.reset({
          routes: [{ name: "MainLogin" }],
        });
      }
    }
  };
  const onLogout = () => {
    Alert.alert("Terminar sessão", "Deseja terminar sessão?", [
      {
        text: "Não",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          AsyncStorage.removeItem("@token");
          // AsyncStorage.removeItem(kwanza);
          navigation.reset({
            routes: [{ name: "MainLogin" }],
          });
        },
      },
    ]);
  };
  console.log("tettt:", reserva);
  useEffect(() => {
    getUser();
  }, []);
  const { nameUser, nBilhete, idUser, tipoConta } = useApplication();
  const [reserva, setReserva] = useState();
  return (
    <Container>
      <TopoBanner>
        <TopoNav1>
          <ImageTrans source={PerfilIm} />
        </TopoNav1>
        <TopoNav>
          <TextB1>{nameUser}</TextB1>
          <LogoutButtom onPress={onLogout}>
            <TextB1>TERMINAR SESSÃO</TextB1>
          </LogoutButtom>
        </TopoNav>
        <InfoArea></InfoArea>
      </TopoBanner>
      <SecondContainer>
        <FacturaSpace style={{ ...style.shadow }}>
          <InputArea>
            <InputText>Nº do Bilhete: </InputText>
            <PaymentsText>{nBilhete}</PaymentsText>
          </InputArea>
          <InputArea>
            <InputText>Tipo de conta : </InputText>
            <PaymentsText>{tipoConta}</PaymentsText>
          </InputArea>
          {/* <InputArea>
            <InputText>Data de criação : </InputText>
            <PaymentsText>2021-09-13T03:59:19.372967+00:00</PaymentsText>
          </InputArea> */}
        </FacturaSpace>
        <TextB>Reservas efectuadas</TextB>
        {reserva == undefined ? (
          <ActivityIndicator size="large" color="#EF9E30" />
        ) : (
          reserva.map((e, i) => (
            <CardReserva
              key={i}
              matricula={e.matricula}
              cor={e.cor}
              modelo={e.modelo}
              marca={e.marca}
              code={e.cod_reserva}
              style={{...style.shadow}}
            />
          ))
        )}
      </SecondContainer>
    </Container>
  );
};
const style = StyleSheet.create({
  shadow: {
    shadowColor: "#1A2A3A",
    shadowOffset: {
      width: 2,
      height: 8,
    },
    shadowRadius: 3.5,
    shadowOpacity: 0.3,
    elevation: 2,
  },
  buttom: {
    paddingLeft: 10,
  },
});
// name={changeNome} accountSaldo={accountSaldo} accountSaldoBalance={accountSaldo}
