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
import Top from "../../../../components/Top/headertop"
import AppStyle from "../../../../AppStyle";
import EmailIm from "../../../../assets/icon/name.png";
import PasswordIm from "../../../../assets/icon/password.png";
import Input from "../../../../components/Input/input";
import API from "../../../../service/api";
import Spinner from "react-native-loading-spinner-overlay";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useApplication } from "../../../../context/application";
import Select from "../../../../components/Select/select";

export default () => {
  const navigation = useNavigation();
  const {setIdUser}=useApplication();
  const [nome, setNome] = useState();
  const [bilhete, setBilhete] = useState();
  const [conta, setConta] = useState("cliente");
  const [password, setPassword] = useState();
  const [spinner, setSpinner] = useState();

  const onSignUp = async () => {
    setSpinner(true);
    try {
      if (conta != "" || password.lenght > 4) {
        let json = await API.signUp(nome,bilhete,password,conta);
        if (json.erro != true) {
          // setInterval(() => {
           
          // }, 1000);
          setSpinner(false);
          setIdUser(json.user.id)
          navigation.reset({
            routes: [{ name: "SignUpC" }],
          });
        
        } else {
          Alert.alert("Atenção", "Dados Incorretos !");
          setNome();
          setPassword();
          setBilhete();
          setSpinner(false);
        }
      } else {
        Alert.alert("Atenção", "Preencha os campos correctamente !");
        setSpinner(false);
      }
    } catch (error) {
      Alert.alert("Erro", "Verifique sua conexão de internet !",error);
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
        <Input inputText="Digite seu nome" value={nome} onChangeText={t=>setNome(t)} source={EmailIm}/>
        <Input inputText="Digite seu nº BI"value={bilhete} onChangeText={t=>setBilhete(t)} source={EmailIm} />
        <Input inputText="Digite sua senha" password={true} value={password} onChangeText={t=>setPassword(t)} source={PasswordIm}/>
        <Button onPress={onSignUp}>
          <TextB>Continuar</TextB>
        </Button>
        <Button1>
          <TextC>
            Eu tenho uma conta ,<Text1>INICIAR SESSÃO!</Text1>
          </TextC>
        </Button1>
      </InputArea>
    </Container>
  );
};
