import React from "react";
import ModalDropdown from "react-native-modal-dropdown";
import {Drop,ImageAreaC,ImageConf1,TextArae,InfoAreaTText,Container,TextArea,Text} from "./style";



export default({options,defaultValue,setOptions,selectText,source,defaultIndex,setIndex})=>{
    return(
        <Container>
            <TextArea>
                <Text>{selectText}</Text>
            </TextArea>
            <ModalDropdown
              options={options}
              style={{
                width: "100%",
                height: 40,
                borderRadius: 8,
                backgroundColor: "#fff",
                borderColor: "#ccc",
                borderWidth: 1,
              }}
              defaultValue={defaultValue}
              textStyle={{
                fontFamily: "Poppins-Regular",
                fontSize: 12,
                color: "#ccc",
                textAlign: "center",
              }}
              dropdownTextStyle={{
                fontFamily: "Poppins-Regular",
                fontSize: 12,
              }}
              dropdownStyle={{ marginBottom: 18, width: "82%" }}
              onSelect={(item, index) => {
                // let name= index.split('/')
                // const data = name.map((name)=>{name})
                setOptions(index);
                // setIndex(item)
               
              }}
            >
              <Drop>
                <ImageAreaC>
                  <ImageConf1 source={source} />
                </ImageAreaC>
                <TextArae>
                  <InfoAreaTText style={{ paddingTop: 6, color: "#ccc" }}>
                    {defaultValue?defaultValue:selectText}
                  </InfoAreaTText>
                </TextArae>
              </Drop>
            </ModalDropdown>
        </Container>
       
    );
}