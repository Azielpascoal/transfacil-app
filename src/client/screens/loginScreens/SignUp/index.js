import React from "react";
import {Container,InfoArea,InputArea,LoginText,Text,TextB,Button,Button1,ImageLogin,TextC,Text1} from "./style";
import AppStyle from "../../../../AppStyle"
import Input from "../../../../components/Input/input"
import Select from "../../../../components/Select/select"

export default()=>{
    return(
        <Container>
            <ImageLogin source={AppStyle.imageSet.LoginIm}/>
            <InputArea>
                <Input
                    inputText="Digite seu nome"
                    
                    
                />
                <Input
                    inputText="Digite seu e-mail"
                    
                />
                <Input
                    inputText="Digite seu nº BI"
                    
                />
                <Select
                    selectText="Digite seu genero"
                    options={["Masculino","Feminino"]}
                />
                <Input
                    inputText="Digite sua senha"
                    password={true}
                    
                />
                <Button>
                    <TextB>Cadastrar</TextB>
                </Button>
                <Button1>
                    <TextC>Eu tenho uma conta ,<Text1>INICIAR SESSÃO!</Text1></TextC>
                </Button1>
                
            </InputArea>
        </Container>
    );
}