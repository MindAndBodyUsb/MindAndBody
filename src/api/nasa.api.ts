import axios from 'axios';


export const nasaApi = axios.create({
    baseURL: import.meta.env.VITE_NASA_URL_API,
    params: {
        api_key: import.meta.env.VITE_NASA_TOKEN,
        thumbs: false
    }
})