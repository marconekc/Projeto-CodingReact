import axios from 'axios';

const api = axios.create({
    baseURL: 'https://valorant-api.com/v1/agents'
});

export default api;