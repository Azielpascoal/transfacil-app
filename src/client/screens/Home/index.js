import React, { useState, useEffect } from "react";
import { Container } from "./style";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Network from "expo-network";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import Top from "../../../components/Top/headertop";
import AsyncStorage from "@react-native-async-storage/async-storage"
import API from "../../../service/api";
import { useApplication } from "../../../context/application";
import {Alert} from "react-native"





export default () => {
  const navigation = useNavigation();
  const [latitude, setLatitude] = useState();
  const [longitide, setLongitide] = useState();
  const { setToken,token,setNameUser,setBilhete,setTipoConta,setIdUser,nameUser ,nBilhete,idUser,tipoConta} = useApplication();
  const getUser = async () => {
    const verifyToken = await AsyncStorage.getItem("@token");
    setToken(verifyToken)
    if (verifyToken) {
      let user = await API.getUser(verifyToken);
      if (user.erro !=true) {
        // console.log("Dados=>", user);
        let json = await API.getClient(verifyToken, user.user.id);
        if (json.erro != true) {
          // console.log("DADOS2=>", json);
          const allDataUser = await json?.usuario.map((data) => {
            return(
              setNameUser(data.nome_cliente),
              setBilhete(data.n_bilhete),
              setTipoConta(data.tipo_de_conta),
              setIdUser(data.id)
            )

          });
          console.log("Ver dados=>",nameUser ,nBilhete,idUser,tipoConta)

        } else {
          console.log("DADOS ERRO2=>", json);
          Alert.alert("Conta","O seu tempo de utilização esxpirou !")
          AsyncStorage.removeItem("@token")
          navigation.reset({
            routes: [{ name: "MainLogin" }],
          });
        }
      } else {
        console.log("DADOS ERRO=>", user);
        navigation.reset({
          routes: [{ name: "MainLogin" }],
        });
      }
    }
  };
  useEffect(() => {
    getUser();
   
  }, [nameUser,,nBilhete,idUser,tipoConta,token]);

  useEffect(() => {
    (async function () {
      try {
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
      } catch (error) {
        console.log("AQUI::", error);
      }
    })();
  }, [latitude, longitide]);
  return (
    <Container>
      <Top />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ width: "100%", height: 800, marginTop: "10%" }}
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
    </Container>
  );
};
