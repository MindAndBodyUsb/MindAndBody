import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router';
import { useAuthStore } from '../../store/authStore';
import { loginAction } from '../actions/authActions';

interface Props {
  email: string;
  password: string;
}

export const useAuthLogin = () => {

  const setLogin = useAuthStore(state => state.setLogin)

  const navigate = useNavigate()
  const { mutate: onLogin, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: ({ email, password }: Props ) => {
      return loginAction( email, password )
    },
    onSuccess: ( data ) => {
      setLogin( data )
      navigate('/')
    }
  })

  return {
    onLogin,
    isPending,
    isSuccess,
    isError,
    error
  }
}