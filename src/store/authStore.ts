import { create,  } from 'zustand'
import { persist } from 'zustand/middleware';
import { Login, ProfileInfo} from '../auth/interfaces/loginInterface';

type AuthState = {
    login: Login;
    profile: ProfileInfo | any;
    setLogin: ( data: Login ) => void;
    setLogout: () => void;
    setProfile: ( data: ProfileInfo ) => void;
}


export const useAuthStore = create(persist<AuthState>(
    ( set ) => ({
        login: { message: '', success: false },
        profile: { name: 'Johan Garzon', email: 'Johan@gmail.com', uid: '12345' },
        setLogin: ( data ) => set(() => ({
            login: data
        })),
        setLogout: () => set(() => ({
            login: { message: '', success: false, token: null, statusCode: null, rest: null },
            profile: {}
        })),
        setProfile: ( data: ProfileInfo ) => set(() => ({
            profile: data
        }))
    }), {
        name: 'auth'
    }
))