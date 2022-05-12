import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const BASE_URL ='http://192.168.43.248:90/API/transfacil_api/public/api'


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
    signIn: async (nome_cliente, password) => {
        const req = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nome_cliente,password})
        });
        const json = await req.json();        
        return json;
    },
    signUp: async (nome_cliente,n_bilhete,password,tipo_de_conta) => {
        const req = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nome_cliente,n_bilhete,password,tipo_de_conta})
        });
        const json = await req.json();        
        return json;
    },  
    signUpClient: async (id_usuario) => {
        const req = await fetch(`${BASE_URL}/registerClient`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id_usuario})
        });
        const json = await req.json();        
        return json;
    },
    signUpTaxista: async (id_usuario,carta_de_conducao) => {
        const req = await fetch(`${BASE_URL}/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id_usuario,carta_de_conducao})
        });
        const json = await req.json();        
        return json;
    },
    signUpContact: async (email,telefone,id_usuario) => {
        const req = await fetch(`${BASE_URL}/registerContact`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,telefone,id_usuario})
        });
        const json = await req.json();        
        return json;
    },  
    signUpCarro: async (id_taxista,marca,modelo,matricula,cor) => {
        const req = await fetch(`${BASE_URL}/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id_taxista,marca,modelo,matricula,cor})
        });
        const json = await req.json();        
        return json;
    },  
    createRserva: async (token,cod_reserva,id_cliente,id_taxista) => {
        const req = await fetch(`${BASE_URL}/reservar?token=${token}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({cod_reserva,id_cliente,id_taxista})
        });
        const json = await req.json();        
        return json;
    },  

    getUser:async(token)=>{
        const req = await fetch(`${BASE_URL}/get_user?token=${token}`,{
            method:'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }

        })
        const json = await req.json();
        return json;
    },
    getTaxista:async(token)=>{
        const req = await fetch(`${BASE_URL}/all_taxista?token=${token}`,{
            method:'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }

        })
        const json = await req.json();
        return json;
    },
    getClient:async(token,id_usuario)=>{
        const req = await fetch(`${BASE_URL}/get_client?token=${token}`,{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id_usuario})

        })
        const json = await req.json();
        return json;
    },
    getReservaClient:async(token,id_cliente)=>{
        const req = await fetch(`${BASE_URL}/reservaClient?token=${token}`,{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id_cliente})

        })
        const json = await req.json();
        return json;
    },
    
    
};