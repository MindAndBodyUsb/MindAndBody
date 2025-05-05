import { nasaApi } from '../../api/nasa.api'
import { Picture } from '../interfaces/pictureInterface'


export const picturesAction = async ():Promise<Picture[]> => {
  const { data } = await nasaApi.get<Picture[]>( '/apod', {
    params: {
      count: 6
    }
  })
  return data
}