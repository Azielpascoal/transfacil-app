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
import EmailIm from "../../../../assets/icon/email.png";
import TelefoneIm from "../../../../assets/icon/phone.png";
import Input from "../../../../components/Input/input";
import API from "../../../../service/api";
import Spinner from "react-native-loading-spinner-overlay";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useApplication } from "../../../../context/application";
import Select from "../../../../components/Select/select";

export default () => {
  const navigation = useNavigation();
  const { idUser } = useApplication();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();
  const [spinner, setSpinner] = useState();
  console.log("retss", idUser);
  useEffect(() => {}, [idUser]);

  const onSignUp = async () => {
    setSpinner(true);
    try {
      if (email != "" || telefone.lenght < 9) {
        let json = await API.signUpContact(email, telefone, idUser);
        if (json.erro != true) {
          let json = await API.signUpClient(idUser);
          if (json.erro != true) {
            setSpinner(false);
            navigation.reset({
              routes: [{ name: "SignIn" }],
            });
            Alert.alert("Olá !", "O seu cadastro foi bem sucedido");
            setSpinner(false);
          } else {
            setSpinner(false);
            Alert.alert("Atenção", "Dados Incorretos !");
            console.log("Erro", json);
          }
        } else {
          Alert.alert("Atenção", "Dados Incorretos !");
          console.log("Erro", json);
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
      Alert.alert("Erro", "Verifique sua conexão de internet !", error);
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
          inputText="Digite seu email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          source={EmailIm}
          placeholder="ex:.joa22@gmail.com"
        />
        <Input
          inputText="Digite seu nº de telefone"
          value={telefone}
          onChangeText={(t) => setTelefone(t)}
          source={TelefoneIm}
        />
        <Button onPress={onSignUp}>
          <TextB>Cadastrar</TextB>
        </Button>
        {/* <Button1>
          <TextC>
            Eu tenho uma conta ,<Text1>INICIAR SESSÃO!</Text1>
          </TextC>
        </Button1> */}
      </InputArea>
    </Container>
  );
};
