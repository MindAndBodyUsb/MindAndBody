import { useNavigate } from 'react-router'
import photo from '../../assets/landingwebp.webp'
import { useAuthStore } from '../../store/authStore'

export const HeroComponent=() => {

  const login = useAuthStore(state => state.login)

  const navigate = useNavigate()

  const onGetStartedNavigate=() => {
    navigate('/auth/register')
  }

  return (
    <div
      className="min-h-[350px] w-full flex items-center justify-baseline relative"
      style={{
        backgroundImage: `url(${photo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='absolute w-full h-full' style={{
        background: 'linear-gradient(65.99deg, #000 0, transparent 99.04%)'
      }}></div>
      <div className="text-neutral-content text-white z-10 p-10">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-7xl font-bold">NASA Test Images</h1>
          <p className="mb-5 text-2xl w-full">
            NASA has always told its story through its images, a few of which have become icons of human history.
          </p>
          {
            !login.success && (
              <button
                onClick={onGetStartedNavigate}
                className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-lg text-md px-8 py-3.5  text-center dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-gray-800 shadow-white shadow-xs"
              >Get Started</button>
            )
          }
        </div>
      </div>
    </div>
  )
}