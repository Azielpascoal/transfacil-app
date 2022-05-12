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
import AppStyle from "../../../../AppStyle";
import Input from "../../../../components/Input/input";
import API from "../../../../service/api";
import Spinner from "react-native-loading-spinner-overlay";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useApplication } from "../../../../context/application";
import Select from "../../../../components/Select/select";

export default () => {
  const navigation = useNavigation();
  const {setIdTaxista,idTaxista}=useApplication();
  const [marca, setMarca] = useState();
  const [modelo, setModelo] = useState();
  const [matricula, setMatricula] = useState();
  const [cor, setCor] = useState();
  const [spinner, setSpinner] = useState();

  const onSignUp = async () => {
    setSpinner(true);
    try {
      if (marca != "" || matricula.lenght <6) {
        let json = await API.signUpCarro(idTaxista,marca,modelo,matricula,cor);
        if (json.erro != true) {
          setInterval(() => {
            navigation.reset({
              routes: [{ name: "SignIn" }],
            });
            setSpinner(false);
          }, 5000);
          Alert.alert("Olá !","O seu cadastro foi bem sucedido")
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
      Alert.alert("Erro", "Verifique sua conexão de internet !");
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
      <ImageLogin source={AppStyle.imageSet.LoginIm} />
      <InputArea>
        <Input inputText="Digite a marca do seu carro" value={marca} onChangeText={t=>setMarca(t)}  />
        <Input inputText="Digite o modelo de seu carro"value={modelo} onChangeText={t=>setModelo(t)} />
        <Input inputText="Digite a matricula do seu carro"value={matricula} onChangeText={t=>setMatricula(t)} />
        <Input inputText="Digite a cor do seu carro"value={cor} onChangeText={t=>setCor(t)} />
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
