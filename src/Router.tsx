import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Access } from './pages/access'
import { Home } from './pages/home'

// !!! Aqui é onde vamos adicionar tudo que vai vir de Rotas de navegação
// entre páginas do nosso projeto !!!
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/acesso',
    element: <Access />,
  },
])

export function Router() {
  return <RouterProvider router={routes} />
}
