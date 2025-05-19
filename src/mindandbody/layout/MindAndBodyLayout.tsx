import { Outlet } from 'react-router';
import { Navbar } from '../components/NavBar';
import { Footer } from '../components/Footer';


export const MindAndBodyLayout=() => {
  return (
    <div className='flex-grow flex flex-col min-h-screen'>
      {/* for the nasa layout I decided to leave a nav and a fixed footer
      this is to show in this one the home and the protected route. */}
      <Navbar />
      <div className='pt-14 flex-1 flex-grow'>
        {/* children routes */}
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}