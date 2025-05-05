import { Link } from 'react-router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { loginSchema } from '../validations/userSchema'
import { useAuthLogin } from '../hooks/useAuthLogin'

import Swal from 'sweetalert2'
import placeholder from '../../assets/placeholder.jpg'
import { useEffect } from 'react'


type Inputs = {
  email: string;
  password: string;
}

export const LoginPage=() => {

  // Here I use Tanstack Query to handle the asynchronous requests and from there I save the status with zustand
  const { onLogin, isPending, isSuccess, isError, error } = useAuthLogin()

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    // Here's how i handle the errors, here are the validations
    resolver: zodResolver( loginSchema )
  })

  const onSubmit: SubmitHandler<Inputs> = async data => {
    onLogin( data )
  }

  useEffect(() => {
    if( isSuccess ) {
        // to display popup messages success i've decided to use sweetalert
        Swal.fire({
          text: 'Login Successfull!',
          color: '#000',
          confirmButtonText: 'Cool!',
          icon: 'success',
          confirmButtonColor: '#000'
        })
      }
      if ( isError ) {
        Swal.fire({
          text: error?.response?.data?.message,
          color: '#000',
          confirmButtonText: 'Continue',
          icon: 'error',
          confirmButtonColor: '#000'
        })
      }
  }, [ error ])

  return (
    <div className="flex flex-col gap-6">
      <div className="overflow-hidden p-0 border border-gray-400 rounded-2xl">
        <div className="grid p-0 md:grid-cols-2">
          {/*
            I used React Hook Form to manage the Inputs
            The disign was taken from a personal project
            I used Zod to manage the inputs errors
          */}
          <form onSubmit={ handleSubmit( onSubmit ) } className="flex flex-col gap-2 p-6">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold">Welcome Back!</h1>
              <p className="text-balance text-gray-500">Enter to your Nasa Image Test account</p>
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >Your email</label>
              <input
                type="email"
                id="email"
                className={`
                  shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-within:outline-gray-500 block w-full p-2.5 dark:shadow-xs-light
                  ${ errors.email?.message ? 'focus-within:outline-red-500' : '' }
                `}
                placeholder="name@flowbite.com"
                { ...register( 'email' ) }
              />
              { 
                errors.email?.message && (
                  <span className='text-red-500 text-sm font-bold'>{ errors.email?.message }</span>
                )
              }
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >Your password</label>
              <input
                type="password"
                id="password"
                className={`
                  shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-within:outline-gray-500 block w-full p-2.5 dark:shadow-xs-light
                  ${ errors.password?.message ? 'focus-within:outline-red-500' : '' }
                `}
                { ...register( 'password' ) }
                />
              {
                errors.password?.message && (
                  <span className='text-red-500 text-sm font-bold'>{ errors.password?.message }</span>
                )
              }
            </div>
            <button
              disabled={ isPending }
              type="submit"
              className="text-white bg-gray-950 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-950 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >{ isPending ? 'Loading...' : 'Login' }</button>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to='/auth/register' className="underline underline-offset-4">
                Register
              </Link>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src={placeholder}
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  )
}