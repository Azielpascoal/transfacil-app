import React from 'react';
import styled from 'styled-components/native';

export const Container= styled.SafeAreaView`
    width:100%;
    margin-top:5px ;
`;

export const TextArea= styled.SafeAreaView`
    width:100%;
    height:20px;
    flex-direction:row;
    margin-top:10px ;
`;
export const Text = styled.Text`
    font-size:12px ;
    font-family:Poppins-Regular;
    color:#003357;
`;
export const InputArea = styled.SafeAreaView`
    margin-top:10px;
    flex-direction:row;
    width:100%;
    height:40px;
    border-radius:8px ;
    border-width:1px;
    border-color:#ccc;
`;
export const IconArea = styled.Image`
    margin:10px;
    width:20px;
    height:20px;
    tint-color:#ccc;
`;
export const Input = styled.TextInput`
    width:80%;
    height:100%; ;
`;
