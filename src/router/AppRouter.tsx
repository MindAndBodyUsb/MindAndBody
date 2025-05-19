import { BrowserRouter, Route, Routes } from 'react-router'

import { lazy, Suspense } from 'react'
import { MainPage } from '../mindandbody/pages/MainPage'
import { LoginPage } from '../auth/pages/LoginPage'
import { RegisterPage } from '../auth/pages/RegisterPage'
import { MindAndBodyLayout } from '../mindandbody/layout/MindAndBodyLayout'

const AuthLayout = lazy(() => {
  return import('../auth/layout/AuthLayout')
})

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MindAndBodyLayout />} >
          <Route index element={ <MainPage /> }/>
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