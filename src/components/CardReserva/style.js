import React from "react"
import styled from "styled-components/native"



export const Container = styled.SafeAreaView`
    width:90%;
    height:200px ;
    background-color:#fcfcfc ;
    border-radius:12px ;
    align-self:center ;
    margin-top:10px ;
`;
export const FirstArea = styled.SafeAreaView`
    width:100%;
    height:45px ;
    flex-direction:column;
    padding:4px ;
`;
export const SecondArea = styled.SafeAreaView`
    width:100%;
    height:30px ;
    flex-direction:row;
    padding:4px ;
    margin-top:5px ;
`;
export const FirstAreaView1 = styled.SafeAreaView`
    width:30%;
    height:100% ;
    /* background-color:#f00 ; */
`;
export const IconArea = styled.SafeAreaView``;
export const FirstAreaView2= styled.SafeAreaView`
    width:70% ;
    flex-direction:row;
    height:100% ;
`;
export const Icon = styled.Image`
     width:40px ;
    height:40px ;
    margin-left:5px;
    margin-top:5px;
    tint-color:#fff;
`;
export const IconV = styled.Image`
    width:15px ;
    height:20px ;
    /* background-color:#5cbc7e; */
    margin-left:5px;
    tint-color:#5cbc7e;
`;
export const Text = styled.Text`
    font-size:12px ;
    color:#2d2d2d;
    font-family:Poppins-Regular ;
    text-transform:uppercase;
    margin-left:5px;
`;
export const Text1 = styled.Text`
    font-size:14px ;
    color:#2d2d2d;
    font-family:Poppins-Bold ;
    text-transform:uppercase;
    margin-left:5px;
`;
export const Text2 = styled.Text`
    font-size:12px ;
    color:#2d2d2d;
    font-family:Poppins-Medium ;
`;
export const Text2V = styled.Text`
    font-size:14px ;
    color:#EF9E30;
    margin-left:5px;
    font-family:Poppins-Medium ;
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
`;
export const InputArea = styled.SafeAreaView`
    width:95%;
    flex:1;
    align-self:center;
    align-items:center;
    justify-content:center;
`;