import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.View`
    width: 100%;
    height: 60px;
    background-color: #003357;
`;
export const LogoImage = styled.Image`
    align-self: flex-end;
    width: 41px;
    height: 34px;
    margin-top: 10px;
    margin-right: 10px;
`;
export const BackButton = styled.TouchableOpacity`
    width:40px ;
    height:40px ;
    justify-content: center;
    align-items: center;
    margin-top:20px ;
    margin-left:10px;
`;
export const BackButtonImage = styled.Image`
    width:20px ;
    height: 20px;
    tint-color:#fff;
`;
// export const TextInfo = styled.Text`
//     font-size: 20px;
//     color: #F7F700;
//     text-align: center;
//     font-weight: bold;
//     margin-top: 25px;
// `;