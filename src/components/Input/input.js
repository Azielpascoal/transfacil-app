import React from 'react';
import {Container,TextArea,Text,InputArea,IconArea,Input} from './style';

export default({inputText,source,onChangeText,value,password,placeholder})=>{
    return(
        <Container>
            <TextArea>
                <Text>{inputText}</Text>
            </TextArea>
            <InputArea>
                <IconArea source={source}/>
                <Input onChangeText={onChangeText} value={value} secureTextEntry={password} placeholder={placeholder}/>
            </InputArea>
        </Container>
    );
}