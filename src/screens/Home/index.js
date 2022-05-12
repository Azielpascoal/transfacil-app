import React from "react"
import {Container,LogoLoad,Button,InfoArea,Text,TextB} from "./style"
import {ActivityIndicator} from "react-native"
import {useNavigation} from "@react-navigation/native"
import Top from "../../components/Top/headertop"
import Im from "../../assets/image/bn4.png"


export default()=>{
    const navigation = useNavigation();

    const onClient =()=>{
        navigation.navigate("MainLogin")
    }
    const onTaxista =()=>{
        navigation.navigate("MainLoginTaxista")
    }
    return(
        <Container>
            <Top/>
            <LogoLoad source={Im}/>
            <InfoArea>
                <Text>Como pretendes usar a aplicação 😀 ?</Text>
            </InfoArea>
           <Button onPress={onClient}>
               <TextB>Usar como cliente</TextB>
           </Button>
           <Button onPress={onTaxista}>
               <TextB>Usar como taxista</TextB>
           </Button>
        </Container>
    );
}