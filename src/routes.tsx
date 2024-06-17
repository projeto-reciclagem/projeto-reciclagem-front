import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { LandingLayout } from './pages/_layouts/landing'
import { NotFound } from './pages/404'
import { Dashboard } from './pages/app/dashboard/dashboard'
// import { Reports } from './pages/app/reports/reports'
import { Schedules } from './pages/app/schedules/schedules'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { Home } from './pages/landing/home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/schedules',
        element: <Schedules />,
      },
      // {
      //   path: '/reports',
      //   element: <Reports />,
      // },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
