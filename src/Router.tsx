import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import QuemSomos from './pages/quem-somos/QuemSomos'
import Cooperativa from './pages/cooperativa/Cooperativa'
import LandingPageCond from './pages/dash-condominio/LandingPageCond'
import CoopPedidos from './pages/cooperativa/CoopPedidos'
import CoopCondominios from './pages/cooperativa/CoopCondominios'
import CoopChat from './pages/cooperativa/CoopChat'
import CoopConfig from './pages/cooperativa/CoopConfig'
import CoopRelatorio from './pages/cooperativa/CoopRelatorio'

// !!! Aqui é onde vamos adicionar tudo que vai vir de Rotas de navegação
// entre páginas do nosso projeto !!!
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/quem-somos',
    element: <QuemSomos />,
  },
  {
    path: '/acesso',
    element: <Login />,
  },
  {
    path: '/cooperativa',
    element: <Cooperativa />,
  },
  {
    path: '/cooperativa/pedidos',
    element: <CoopPedidos />,
  },
  {
    path: '/cooperativa/condominios',
    element: <CoopCondominios />,
  },
  {
    path: '/condominio',
    element: <LandingPageCond />,
  },
  {
    path: '/cooperativa/chat',
    element: <CoopChat />,
  },
  {
    path: '/cooperativa/config',
    element: <CoopConfig />,
  },
  {
    path: '/cooperativa/relatorio',
    element: <CoopRelatorio />,
  },
])

export function Router() {
  return <RouterProvider router={routes} />
}
