import authRequest from '../../api/auth.api'
import { ProfileInfo } from '../../auth/interfaces/loginInterface'


export const profileAction = async ():Promise<ProfileInfo> => {
  const { data } = await authRequest.get<ProfileInfo>( '/auth/profile' )
  return data
}