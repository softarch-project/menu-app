import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const Restaurant = lazy(() => import('../pages/Restaurant'))
const Menu = lazy(() => import('../pages/Menu'))
const NotFound = lazy(() => import('../pages/NotFound'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:restaurantId',
    element: <Restaurant />,
  },
  {
    path: '/:restaurantId/:menuName',
    element: <Menu />,
  },
])

export default router
