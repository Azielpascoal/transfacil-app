import React from 'react';
import {Container,LogoImage,BackButton,BackButtonImage,TextInfo} from './style';
import BackIm from '../../assets/icons/back.png'
import {useNavigation} from "@react-navigation/native"


export default ()=>{
    const navigation= useNavigation();
    return(
        <Container>
            {/* <LogoImage source={AppStyle.imageSet.logo}/> */}
            <BackButton onPress={()=>navigation.goBack()}>
                <BackButtonImage source={BackIm}/>
            </BackButton>
            {/* <TextInfo>{title}</TextInfo> */}
        </Container>
    );
}