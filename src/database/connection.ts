import axios from 'axios';

export const connection = axios.create({
    baseURL: 'https://valorant-api.com/v1/',
    params: {
        language: "pt-BR"
    }
})