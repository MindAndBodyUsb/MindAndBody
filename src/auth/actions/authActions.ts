import authRequest from '../../api/auth.api'
import { Login, Register } from '../interfaces/loginInterface'

export const loginAction = async ( email: string, password: string ):Promise<Login> => {
  const { data } = await authRequest.post<Login>( '/auth/login', { email, password })
  return data
}

export const registerAction = async ( name: string, email: string, password: string ):Promise<Register> => {
  const { data } = await authRequest.post<Register>( '/auth/register', { name, email, password })
  return data
}
