import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/home/Home";

// !!! Aqui é onde vamos adicionar tudo que vai vir de Rotas de navegação entre páginas do nosso projeto !!!
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
])

export function Routes() {
  return (
    <RouterProvider router={router} />
  )
}