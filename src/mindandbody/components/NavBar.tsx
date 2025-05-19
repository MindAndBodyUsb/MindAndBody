import { useState } from 'react'
import { Link } from 'react-router'
import { useAuthStore } from '../../store/authStore'



export const Navbar=() => {

  const login = useAuthStore( state => state.login)
  const onLogout = useAuthStore( state => state.setLogout )
  const [ toggleDropDown, setToggleDropDown ] = useState(false)

  const onCloseSession = () => {
    onLogout()
  }

  return (
    <nav className="flex dark:bg-black items-center fixed z-20 justify-between bg-white px-5 py-6 w-full h-14">
      <div>
        <Link to={'/'} className='text-white font-bold cursor-pointer flex justify-content items-center gap-3'>
          <img className='h-[34px]' src="/src/assets/mab.png" alt="mindandbody" />
          MindAndBody
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        <div className="">
          {
            login.success
              ? (
                <button onClick={() => setToggleDropDown( !toggleDropDown )}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path className="dark:stroke-white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              )
              :(
                <Link to={'/MindAndBody/auth'} className='text-white cursor-pointer'>Login</Link>
              )
          }
          {
            toggleDropDown && login.success && (
              <div className="drop-down w-48 overflow-hidden bg-white rounded-md shadow absolute top-14 right-3">
                <ul>
                  <li className="hover:bg-slate-400">
                    <Link to={'/MindAndBody/'} className='px-3 py-3 text-sm font-medium flex items-center space-x-2'>
                      <i className="fa-solid fa-house text-xl"></i>
                      <span> Home </span>
                    </Link>
                  </li>
                  {/* <li className="hover:bg-slate-400">
                    <Link to={'/MindAndBody/profile'} className='px-3 py-3 text-sm font-medium flex items-center space-x-2'>
                      <i className="fa-solid fa-user text-xl"></i>
                      <span> Profile </span>
                    </Link>
                  </li> */}
                  <li className="hover:bg-slate-400">
                    <button onClick={ onCloseSession } className='px-3 py-3 text-sm font-medium flex items-center space-x-2'>
                      <i className="fa-solid fa-right-from-bracket text-xl"></i>
                      <span> Logout </span>
                    </button>
                  </li>
                </ul>
              </div>
            )
          }
        </div>
        <div className="sm:hidden cursor-pointer" id="mobile-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path className="dark:stroke-white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </nav>
  )
}