import './globals.css'

import { RouterProvider } from 'react-router-dom'

import { Toaster } from './components/ui/sonner'
import { router } from './routes'

export function App() {
  return (
    <>
      <Toaster theme="light" richColors />
      <RouterProvider router={router} />
    </>
  )
}
