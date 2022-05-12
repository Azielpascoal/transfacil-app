import React, { useState, useEffect } from "react";
import { Container, MapArea, InputArea, InfoArea, Text ,Button,TextB} from "./style";
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Input from "../../../components/Input/input";
import Select from "../../../components/Select/select";
import * as Network from "expo-network";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export default () => {
  const [latitude, setLatitude] = useState();
  const [longitide, setLongitide] = useState();

  useEffect(() => {
    (async function () {
      const { status, permissions } = await Permissions.askAsync(
        Permissions.LOCATION
      );
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        setLatitude(location.coords.latitude);
        setLongitide(location.coords.longitude);
        console.log("longitude" + longitide + "latitude" + latitude);

        /* setOrigin({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.000922,
                    longitudeDelta: 0.000421
                })*/
      } else {
        throw new Error("Location permission not granted");
      }
    })();
  }, [latitude, longitide]);
  return (
    <Container>
      <MapArea>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ width: "100%", height: 700 }}
          initialRegion={{
            latitude: latitude,
            longitude: longitide,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          }}
          loadingEnabled={true}
          title={"soares"}
        >
          {latitude == null || longitide == null ? (
            <MapView.Marker
              coordinate={{ latitude: -8.8806203, longitude: 13.2771053 }}
              title={"title"}
              description={"description"}
            />
          ) : (
            <MapView.Marker
              coordinate={{ latitude: latitude, longitude: longitide }}
              title={"title"}
              description={"description"}
            />
          )}
        </MapView>
      </MapArea>
      <InputArea style={{ ...style.shadow }}>
        <InfoArea>
          <Text>Solicite o seu táxi 😶 !</Text>
        </InfoArea>
        <Select selectText="Selecione um horário" options={["7:00", "8:00"]} />
        <Select selectText="Deseja levar carga" options={["Sim", "Não"]} />
        <Input inputText="Valor a pagar" placeholder="AOA" />
        <Input inputText="Descrição" placeholder="ex:..." />
        <Button >
          <TextB>Solicitar</TextB>
        </Button>
      </InputArea>
    </Container>
  );
};
const style = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 8,
    },
    shadowRadius: 3.5,
    shadowOpacity: 0.3,
    elevation: 18,
  },
  buttom: {
    paddingLeft: 10,
  },
});
