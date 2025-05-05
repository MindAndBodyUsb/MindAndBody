import { BrowserRouter, Route, Routes } from 'react-router'

import { lazy, Suspense } from 'react'
import { MainPage } from '../nasa/pages/MainPage'
import { LoginPage } from '../auth/pages/LoginPage'
import { RegisterPage } from '../auth/pages/RegisterPage'
import { NasaLayout } from '../nasa/layout/NasaLayout'
import { PrivateRoute } from '../nasa/components/PrivateRoute'
import { useAuthStore } from '../store/authStore'
import { ProfilePage } from '../nasa/pages/ProfilePage'

const AuthLayout = lazy(() => {
  return import('../auth/layout/AuthLayout')
}) 

export const AppRouter = () => {
  const login = useAuthStore(state => state.login)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NasaLayout />} >
          <Route index element={ <MainPage /> }/>
          <Route path='/profile' element={
            <PrivateRoute isAuthenticated={ login.success }>
              <ProfilePage />
            </PrivateRoute>
          }/>

        </Route>

        <Route
          path='/auth'
          element={ 
            <Suspense
              fallback={
                <div className='flex h-screen w-full items-center justify-center bg-background'>
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                </div>
              }
            >
              <AuthLayout />
            </Suspense>
          }>
            <Route index element={ <LoginPage /> }/>
            <Route path='/auth/register' element={ <RegisterPage /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}