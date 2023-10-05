 import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
// !!! Aqui é onde vamos adicionar tudo que vai vir de Rotas de navegação 
// entre páginas do nosso projeto !!!
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
])

export function Router() {
  return (
    <RouterProvider router={routes} />
  )
}