import { Outlet } from 'react-router'

export default function AuthLayout() {
  return (
    // Layout to render only the page i'm going to need in this case login and register page
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <Outlet />
      </div>
    </div>
  )
}