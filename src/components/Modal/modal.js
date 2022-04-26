import React, { useState, useEffect } from 'react'
import {
    Container, InfoArea, InfoImage, InfoAreaText1, InfoAreaText2, ButtomArea, ButtomTouch,
    ButtomText1, AuthArea, InfoAreaAuth, ButtomTouch1, ButtomText
} from './style'
import { useNavigation } from '@react-navigation/native'
import Modal from 'react-native-modal'
import { Platform } from 'react-native'
export default ({firstText,secondText,isVisible,onPress}) => {
    const navigation = useNavigation()
   
    return (
        <Container>
            {/* <Spinner
                visible={spninner}
                textContent={'Processando...'}
                textStyle={{ color: '#fff' }}
            />

            <Top /> */}
            <InfoArea>
                <InfoAreaText1 ></InfoAreaText1>
                <InfoAreaText2 ></InfoAreaText2>
            </InfoArea>
            {/* <ButtomArea>
                <ButtomTouch onPress={authenticate}>
                    <ButtomText1>Clique para verificar</ButtomText1>
                </ButtomTouch>
            </ButtomArea> */}
            <Modal
                isVisible={isVisible}
            >
                <AuthArea>
                    <InfoAreaAuth>
                        <InfoAreaText1 >{firstText}</InfoAreaText1>
                        {/* <InfoImage
                            source={Touch}
                            style={{
                                tintColor: printColor
                            }}

                        /> */}
                        <InfoAreaText2>{secondText}</InfoAreaText2>
                    </InfoAreaAuth>
                    <ButtomTouch1  onPress={onPress}>
                        <ButtomText1
                          
                        >OK</ButtomText1>
                    </ButtomTouch1>
                </AuthArea>
            </Modal>
        </Container>
    );
}

