import React,{useState,useEffect} from "react";
import {Container,InfoArea,InputArea,LoginText,Text,TextB,Button,Button1,ImageLogin,TextC,Text1} from "./style";
import AppStyle from "../../../../AppStyle"
import Input from "../../../../components/Input/input"
import API from "../../../../service/api"
import EmailIm from "../../../../assets/icon/email.png"
import PasswordIm from "../../../../assets/icon/password.png"
import {Alert} from "react-native"

export default()=>{
        const [email,setEmail]= useState()
        const [password,setPassword]= useState()

        const onSignIn =async()=>{
           try {
            if(email != "" || password.lenght >4){
                let json = await API.signIn(email,password);
                if(json){
                    console.log("Dados",json)
                }
                else{
                    
                }
            }
            else{

            }
               
           } catch (error) {
               
           }
        }
    return(
        <Container>
            <ImageLogin source={AppStyle.imageSet.LoginIm}/>
            <InputArea>
                <Input
                    inputText="Digite seu e-mail"
                    source={EmailIm}
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChangeText={t=>setEmail(t)}
                />
                <Input
                    inputText="Digite sua senha"
                    password={true}
                    source={PasswordIm}
                    value={password}
                    onChangeText={t=>setPassword(t)}
                    placeholder="....."
                />
                <Button onPress={onSignIn}>
                    <TextB>Entrar</TextB>
                </Button>
                <Button1>
                    <TextC>Não tenho uma conta ,<Text1>CADASTRAR-SE!</Text1></TextC>
                </Button1>
                <Button1>
                    <TextC>Esqueci minha senha !</TextC>
                </Button1>
            </InputArea>
        </Container>
    );
}