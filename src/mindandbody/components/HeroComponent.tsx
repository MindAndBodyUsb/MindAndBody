import { useNavigate } from 'react-router'
import photo from '../../assets/hero.png'
import mab from '../../assets/mab.png'
import { useAuthStore } from '../../store/authStore'

export const HeroComponent=() => {

  const login = useAuthStore(state => state.login)

  const navigate = useNavigate()

  const onGetStartedNavigate=() => {
    navigate('/MindAndBody/auth/register')
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
          <h1 className="mb-5 text-7xl font-boldf flex items-center gap-3">
            <img className='h-24' src={mab} alt="mindandbody" />
            MindAndBody
          </h1>
          <h3 className="mb-2 text-2xl w-full">
            The Gateway to Health For Your Mind and Body
          </h3>
          <p className='mb-5'>Learn more about our project and about those of us who are looking to bring you physical and mental health.</p>
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