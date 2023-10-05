 import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import QuemSomos from "./pages/quem-somos/QuemSomos";

// !!! Aqui é onde vamos adicionar tudo que vai vir de Rotas de navegação 
// entre páginas do nosso projeto !!!
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'quem-somos',
    element: <QuemSomos />
  }
])

export function Router() {
  return (
    <RouterProvider router={routes} />
  )
}