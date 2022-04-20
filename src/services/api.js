import axios from 'axios';

// https://api.hgbrasil.com/weather?key=a71f7c5e&lat=-23.682&lon=-46.875

export const key = 'a71f7c5e' ;

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});

export default api;