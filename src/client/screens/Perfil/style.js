import React from "react";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;
export const TopoBanner = styled.ImageBackground`
  width: 100%;
  height: 350px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color:#EF9E30 ;
`;
export const TopoNav = styled.SafeAreaView`
  width: 90%;
  margin-bottom: 20px;
  /* background-color: #000; */
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
`;
export const TopoNav1 = styled.SafeAreaView`
  width: 80px;
  height: 80px;
  background-color: #fafafa;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  border-radius: 50px;
`;
export const TopoNav11 = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`;
export const TopoNav2 = styled.SafeAreaView`
  justify-content: center;
  width: 50%;
  padding: 0 28px;
`;
export const InfoArea = styled.SafeAreaView`
  margin-top: 2.8px;
  align-items: center;
  margin-bottom: 10px;
`;
export const TextB = styled.Text`
  font-size: 16px;
  color: #1a2a3a;
  font-family: Poppins-Medium;
  margin-left:15px;
  margin-bottom: 10px;
`;
export const TextB1 = styled.Text`
  font-size: 12px;
  color: #fff;
  font-family: Poppins-Regular;
  text-align: center;
`;
export const TextB2 = styled.Text`
  font-size: 14px;
  color: #fff;
  font-family: Poppins-Bold;
`;
export const TextG = styled.Text`
  font-size: 12px;
  color: #55bc7e;
  font-family: Poppins-Bold;
`;
export const ImageTrans = styled.Image`
  width: 50px;
  height: 50px;
  tint-color: #EF9E30;
  align-self: center;
`;
export const SecondContainer = styled.SafeAreaView`
  width: 100%;
  flex: 1;
  background-color: #fff;
  margin-top: -30px;
  border-top-right-radius: 35px;
  margin-bottom: 10%;
`;
export const ChangeCardArea = styled.SafeAreaView`
  width: 90%;
  flex: 1;
  padding: 16px 16px;
  align-self: center;
`;
export const AllCardsArea = styled.SafeAreaView`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border-color: #f1f1f1;
  border-width: 1px;
  align-items: center;
  padding: 0px 4px 0px 8px;
  flex-direction: row;
`;
export const CardsText = styled.Text`
  font-size: 14px;
  font-family: Poppins-Medium;
  color: #1a2a3a;
  padding-right: 16%;
`;
export const TransferArea = styled.SafeAreaView`
  width: 90%;
  background-color: #fafafa;
  padding: 16px 16px;
  align-self: center;
  margin-top: -15%;
`;
export const InputArea = styled.SafeAreaView`
  width: 97%;
  flex-direction: row;
  margin-top: 1%;
  padding-top: 16px;
  /* padding-left: 40px; */
  border-color: #fff;
  border-bottom-color: #fafafa;
  border-width: 1px;
  align-self: center;
  align-items: center;
  margin-top:2%;
  margin-bottom:2% ;
`;
export const InputText = styled.Text`
  font-size: 12px;
  font-family: Poppins-Medium;
  color: #1a2a3a;
  padding-bottom: 0px;
`;
export const TransferButtom = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  background-color: #55bc7e;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;
export const LogoutButtom = styled.TouchableOpacity`
 
`;
export const TransferButtomText = styled.Text`
  font-size: 14px;
  font-family: Poppins-Regular;
  color: #fff;
`;
export const PaymentsArea = styled.SafeAreaView`
  width: 96%;
  flex: 1;
  background-color: #fafafa;
  align-self: center;
  margin-top: 20px;
  flex-direction: column;
  justify-content:center;
  margin-right: 6%;
`;
export const PaymentsButtom = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: #55bc7e;
  margin-top: 8%;
`;
export const PaymentsImage = styled.Image`
  width: 25px;
  height: 25px;
`;
export const PaymentsText = styled.Text`
  font-size: 12px;
  color: #1a2a3a;
  font-family: Poppins-Regular;
  text-align: center;
`;
export const FacturaSpace = styled.SafeAreaView`
  width: 94%;
  flex:1;
  border-radius: 18px;
  margin-bottom: 8%;
  background-color: #fff;
  align-self: center;
  margin-top: -65px;
`;
