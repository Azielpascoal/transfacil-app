import React, { useState, useEffect } from "react";
import {
  Container,
  InfoArea,
  InputArea,
  LoginText,
  Text,
  TextB,
  Button,
  Button1,
  ImageLogin,
  TextC,
  Text1,
} from "./style";
import { useNavigation } from "@react-navigation/native";
import AppStyle from "../../../../AppStyle";
import Input from "../../../../components/Input/input";
import API from "../../../../service/api";
import EmailIm from "../../../../assets/icon/name.png";
import Top from "../../../../components/Top/headertop"
import PasswordIm from "../../../../assets/icon/password.png";
import Spinner from "react-native-loading-spinner-overlay";
import { Alert } from "react-native";

export default () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState();
  const [password, setPassword] = useState();
  const [spinner, setSpinner] = useState();

  const onSignIn = async () => {
    setSpinner(true);
    try {
      if (nome != "" || password.lenght > 4) {
        let json = await API.signIn(nome, password);
        if (json.erro != true) {
          // setInterval(() => {
            navigation.reset({
              routes: [{ name: "MainTab" }],
            });
            setSpinner(false);
          // }, 10000);
        } else {
          Alert.alert("Atenção", "Dados Incorretos !");
          setEmail();
          setPassword();
          setSpinner(false);
        }
      } else {
        Alert.alert("Atenção", "Preencha os campos correctamente !");
        setSpinner(false);
      }
    } catch (error) {
      Alert.alert("Erro", "Verifique sua conexão de internet !");
      console.log("DADOS",error)
      setSpinner(false);
    }
  };
  return (
    <Container>
      {spinner ? (
        <Spinner
          visible={true}
          textContent={"Processando..."}
          textStyle={{ color: "#fff" }}
        />
      ) : (
        console.log()
      )}
      <Top/>
      <ImageLogin source={AppStyle.imageSet.LoginIm} />
      <InputArea>
        <Input
          inputText="Digite seu nome"
          source={EmailIm}
          placeholder="ex:João Jorge"
          value={nome}
          onChangeText={(t) => setNome(t)}
        />
        <Input
          inputText="Digite sua senha"
          password={true}
          source={PasswordIm}
          value={password}
          onChangeText={(t) => setPassword(t)}
          placeholder="....."
        />
        <Button onPress={onSignIn}>
          <TextB>Entrar</TextB>
        </Button>
        <Button1 onPress={()=>navigation.navigate("SignUp")}>
          <TextC>
            Não tenho uma conta ,<Text1>CADASTRAR-SE!</Text1>
          </TextC>
        </Button1>
        <Button1>
          <TextC>Esqueci minha senha !</TextC>
        </Button1>
      </InputArea>
    </Container>
  );
};
