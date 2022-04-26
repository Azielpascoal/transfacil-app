import React from "react";
import {Container,LogoLoad,LogoIm} from "./style"
import AppStyle from "../../AppStyle"

export default()=>{
    return(
        <Container>
            <LogoIm source={AppStyle.imageSet.logo}/>
            <LogoLoad source={AppStyle.imageSet.PreloadIm}/>
        </Container>
    );
}
