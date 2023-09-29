import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";

// !!! Aqui é onde vamos adicionar tudo que vai vir de Rotas de navegação entre páginas do nosso projeto !!!
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
])

export function Routes() {
  return (
    <RouterProvider router={router} />
  )
}