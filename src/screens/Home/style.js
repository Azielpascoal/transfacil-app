import React from "react"
import styled from "styled-components/native"


export const Container = styled.ScrollView`
    flex: 1;
   
`;
export const LogoLoad = styled.Image`
    width:300px ;
    height:300px ;
    align-self:center ;
    margin-top:40%;
`;
export const InfoArea = styled.SafeAreaView`
    align-items: center;
    align-self:center ;
    width:80%;
    height:100px ;
`;
export const Text = styled.Text`
    font-size:18px;
    font-family:Poppins-Medium;
    color:#2d2d2d;
    align-self:center;
    text-align:center;
`;
export const Button = styled.TouchableOpacity`
    background-color:#EF9E30 ;
    width:80% ;
    height:45px ;
    border-radius:12px ;
    align-items:center;
    align-self:center;
    justify-content:center;
    margin-top:10px ;
    margin-bottom:15px; ;
`;
export const Button1 = styled.TouchableOpacity`
`;
export const TextB = styled.Text`
    font-size:12px;
    font-family:Poppins-Regular;
    color:#1a2a3a;
    
`;