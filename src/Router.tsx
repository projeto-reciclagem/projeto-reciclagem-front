import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import QuemSomos from './pages/quem-somos/QuemSomos'
import Cooperativa from './pages/cooperativa/Cooperativa'
import LandingPageCond from './pages/dash-condominio/LandingPageCond'
import ConfigCond from './pages/dash-condominio/ConfigCond'
import RelatorioCond from './pages/dash-condominio/RelatorioCond'
import CoopPedidos from './pages/cooperativa/CoopPedidos'
import CoopCondominios from './pages/cooperativa/CoopCondominios'

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
    element: <LandingPageCond />
  },
  {path: '/config-condominio',
    element: <ConfigCond />
  },
  {
    path: '/relatorio-condominio',
    element: <RelatorioCond />
  }
])

export function Router() {
  return <RouterProvider router={routes} />
}
