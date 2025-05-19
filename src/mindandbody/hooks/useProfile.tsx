import { useQuery } from '@tanstack/react-query'
import { useAuthStore } from '../../store/authStore'
import { profileAction } from '../actions/profileAction'

export const useProfile = () => {
  const setProfile = useAuthStore(state => state.setProfile)

  const { data, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: profileAction
  })

  if ( data ) {
    setProfile( data )
  }

  return {
    data,
    isLoading
  }
}