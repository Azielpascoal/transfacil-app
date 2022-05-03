import React,{useState,useEffect} from "react";
import { Container } from "./style";
import {ActivityIndicator} from "react-native"
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
import * as Network from 'expo-network';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
export default () => {

    const [latitude, setLatitude]=useState();
    const [longitide, setLongitide]=useState();

    useEffect(()=>{
        (async function(){
            const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
            if (status === 'granted') {
                let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
                setLatitude(location.coords.latitude);
                setLongitide(location.coords.longitude);
                console.log("longitude"+longitide+"latitude"+latitude);
  
               /* setOrigin({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.000922,
                    longitudeDelta: 0.000421
                })*/
            } else {
                throw new Error('Location permission not granted');
            }
        })();
    },[latitude,longitide]);
  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ width: "100%", height: 700}}
        initialRegion={{
          latitude:latitude,
          longitude:longitide,
          latitudeDelta:0.00922,
          longitudeDelta:0.00421,
        }}
        loadingEnabled={true}
        title={"soares"}
      >
       {
           latitude == null || longitide==null?(
            <MapView.Marker
            coordinate={{ latitude:-8.8806203,longitude:13.2771053}}
            title={"title"}
            description={"description"}
          />
           ):(

            <MapView.Marker
            coordinate={{ latitude:latitude, longitude:longitide}}
            title={"title"}
            description={"description"}
          />
           )
       }
      </MapView>
    </Container>
  );
};
