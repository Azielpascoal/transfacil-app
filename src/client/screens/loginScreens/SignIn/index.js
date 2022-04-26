import React from "react";
import {Container,InfoArea,InputArea,LoginText,Text,TextB,Button,Button1,ImageLogin,TextC,Text1} from "./style";
import AppStyle from "../../../../AppStyle"
import Input from "../../../../components/Input/input"

export default()=>{
    return(
        <Container>
            <ImageLogin source={AppStyle.imageSet.LoginIm}/>
            <InputArea>
                <Input
                    inputText="Digite seu e-mail"
                    
                />
                <Input
                    inputText="Digite sua senha"
                    password={true}
                    
                />
                <Button>
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