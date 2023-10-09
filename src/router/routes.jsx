import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Index from '../pages/Home'
import Detalles from '../pages/Detalles'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/detalles", element: <Detalles /> }
    ]
  }
])

export default routes
