import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import QuemSomos from './pages/quem-somos/QuemSomos'
import Cooperativa from './pages/cooperativa/Cooperativa'
import LandingPageCond from './pages/dash-condominio/LandingPageCond'
import ConfigCond from './pages/dash-condominio/ConfigCond'
import RelatorioCond from './pages/dash-condominio/RelatorioCond'
import PedidosCond from './pages/dash-condominio/PedidosCond'
import CoopPedidos from './pages/cooperativa/CoopPedidos'
import CoopCondominios from './pages/cooperativa/CoopCondominios'
<<<<<<< HEAD
import path from 'path'
=======
import CoopChat from './pages/cooperativa/CoopChat'
import CoopConfig from './pages/cooperativa/CoopConfig'
import CoopRelatorio from './pages/cooperativa/CoopRelatorio'
>>>>>>> 63834a29c86179a87e94822a0d4fc23560372617

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
<<<<<<< HEAD
    element: <LandingPageCond />
  },
  {path: '/config-condominio',
    element: <ConfigCond />
  },
  {
    path: '/relatorio-condominio',
    element: <RelatorioCond />
  },
  {
    path: '/pedidos-condominio',
    element: <PedidosCond />
=======
    element: <LandingPageCond />,
  },
  {
    path: '/condominio/config',
    element: <ConfigCond />,
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
  {
    path: '/relatorio-condominio',
    element: <RelatorioCond />,
  },
  {
    path: '/pedidos-condominio',
    element: <PedidosCond />,
>>>>>>> 63834a29c86179a87e94822a0d4fc23560372617
  },
])

export function Router() {
  return <RouterProvider router={routes} />
}
