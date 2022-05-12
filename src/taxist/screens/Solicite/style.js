import React from "react"
import styled from "styled-components/native"


export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color:#f00 ;
`;
export const MapArea = styled.SafeAreaView`
    width:100%;
    height:60%;
`;
export const InputArea = styled.ScrollView`
    width:100%;
    height:40%;
    background-color:#fff ;
    border-top-right-radius:35px ;
    border-top-left-radius:35px ;
    padding:12px ;
`;
export const InfoArea = styled.SafeAreaView`
    width:100%;
    height:50px;
    align-self:center;
`;
export const Text = styled.Text`
    font-size:18px ;
    font-family: Poppins-Bold;
    margin-top:15px ;
    color:#EF9E30;
`;
export const Button = styled.TouchableOpacity`
    background-color:#EF9E30 ;
    width:100% ;
    height:45px ;
    border-radius:12px ;
    align-items:center;
    align-self:center;
    justify-content:center;
    margin-top:10px ;
    margin-bottom:15% ;
`;
export const TextB = styled.Text`
    font-size:14px ;
    font-family: Poppins-Regular;
    color:#FFF;
`;