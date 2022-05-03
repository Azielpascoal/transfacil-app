import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const BASE_URL ='http://192.168.43.248:90/transfacil_api/transfacil_api/public/api'


export default {

    // checkToken: async (token) => {
    //     const req = await fetch(`${BASE_URL}/auth/refresh`, {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({token})
    //     });
    //     const json = await req.json();        
    //     return json;
    // },
    signIn: async (email, password) => {
        const req = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})
        });
        const json = await req.json();        
        return json;
    },
    signUp: async () => {
        const req = await fetch(`${BASE_URL}/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({no})
        });
        const json = await req.json();        
        return json;
    },  

    senderActivos:async(token)=>{
        const req = await fetch(`${BASE_URL}/sender_id_activos?token=${token}`,{
            method:'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }

        })
        const json = await req.json();
        return json;
    },
    
    
};