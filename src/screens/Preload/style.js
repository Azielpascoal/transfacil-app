import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color:#fff;
   
`;
export const LogoIm = styled.Image`
   
    margin-top:50px ;
    width:100px;
    height:50px ;
    margin-left:20px;
`;
export const LogoLoad = styled.Image`
    width:200px ;
    height:200px ;
    align-self:center ;
    margin-top:40%;
`;
export const InfoArea = styled.SafeAreaView`
    align-items: center;
    align-self:center ;
    width:80%;
    height:150px ;
`;
export const Text = styled.Text`
    font-size:16px;
    font-family:Poppins-Regular;
    color:#2d2d2d;
    align-self:center;
    text-align:center;
`;