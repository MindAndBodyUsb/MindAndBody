import { useAuthStore } from '../../store/authStore'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { useProfile } from '../hooks/useProfile'



export const ProfilePage = () => {
  const { data, isLoading } = useProfile()
    const onLogout = useAuthStore( state => state.setLogout )
  
    const onCloseSession = () => {
      onLogout()
    }

  if ( isLoading ) {
    return (
      <LoadingSpinner />
    )
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h2 className='text-3xl font-semibold text-center my-7'>Profile</h2>
      <p className='font-bold text-center'>Welcome {data?.name}!</p>
      <form  className='flex flex-col gap-4'>
        <span
          className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2 flex justify-center items-center'
        >
          <i className="fa-solid fa-user text-xl"></i>
        </span>
        <input
          type='text'
          placeholder='username'
          id='username'
          className='border p-3 rounded-lg'
          value={ data?.name }
          disabled={true}
          />
        <input
          type='text'
          placeholder='email'
          id='email'
          className='border p-3 rounded-lg'
          value={ data?.email }
          disabled={true}
        />
      </form>
      <div className='flex justify-between mt-5'>
        <span onClick={onCloseSession} className='text-red-700 cursor-pointer'>
          Logout
        </span>
      </div>
    </div>
  )
}