import React from "react";
import {
  Container,
  FirstArea,
  FirstAreaView1,
  FirstAreaView2,
  Icon,
  IconV,
  SecondArea,
  Text,
  Text1,
  Text2,
  Text2V,
  Button,
  InputArea,
} from "./style";
import Input from "../Input/input";
import CodIm from "../../assets/icon/password.png"
import Up from "../../assets/icon/up.png";

export default ({
  code,
  marca,
  modelo,
  cor,
  matricula,

}) => {
  return (
    <Container>
      <SecondArea>
        <FirstAreaView2>
          <Text2V>Código de Reserva:</Text2V>
        </FirstAreaView2>
        <FirstAreaView1>
          <Text2>{code}</Text2>
        </FirstAreaView1>
      </SecondArea>
      <SecondArea>
        <FirstAreaView2>
          <Text2V>Marca do carro:</Text2V>
        </FirstAreaView2>
        <FirstAreaView1>
          <Text2>{marca}</Text2>
        </FirstAreaView1>
      </SecondArea>
      <SecondArea>
        <FirstAreaView2>
          <Text2V>Modelo:</Text2V>
        </FirstAreaView2>
        <FirstAreaView1>
          <Text2>{modelo}</Text2>
        </FirstAreaView1>
      </SecondArea>
      <SecondArea>
        <FirstAreaView2>
          <Text2V>Cor:</Text2V>
        </FirstAreaView2>
        <FirstAreaView1>
          <Text2>{cor}</Text2>
        </FirstAreaView1>
      </SecondArea>
      <SecondArea>
        <FirstAreaView2>
          <Text2V>Matricula:</Text2V>
        </FirstAreaView2>
        <FirstAreaView1>
          <Text2>{matricula}</Text2>
        </FirstAreaView1>
      </SecondArea>
      {/* <InputArea>
        <Input placeholder="Escolha um código de entrada" source={CodIm} onChangeText={onChangeText} value={value}/>
        <Button onPress={onPress}>
            <Text2>Marcar Reserva</Text2>
        </Button>
      </InputArea> */}
    </Container>
  );
};
