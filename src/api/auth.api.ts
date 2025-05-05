import axios, { InternalAxiosRequestConfig } from 'axios'
import { useAuthStore } from '../store/authStore'

const authRequest = axios.create({
    baseURL: import.meta.env.VITE_AUTH_URL_API
})

const onRequest = ( config: InternalAxiosRequestConfig ) => {
    const token = useAuthStore.getState().login.token
    config.headers.set({
        Authorization: `Bearer ${ token }`
    })
    return config
}

authRequest.interceptors.request.use(onRequest)

export default authRequest