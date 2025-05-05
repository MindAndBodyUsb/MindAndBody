import { useMutation } from '@tanstack/react-query'
import { registerAction } from '../actions/authActions'
import { useNavigate } from 'react-router';
import { Register } from '../interfaces/loginInterface';

interface Props {
  name: string;
  email: string;
  password: string;
}

export const useAuthRegister = () => {

  const navigate = useNavigate()
  const { mutate: onRegister, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: ({ name, email, password }: Props ): Promise<Register> => {
      return registerAction( name, email, password )
    },
    onSuccess: () => {
      navigate('/auth')
    }
  })

  return {
    onRegister,
    isPending,
    isSuccess,
    isError,
    error
  }
}