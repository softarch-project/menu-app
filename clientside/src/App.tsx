import { Provider } from 'mobx-react'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import Loading from './components/Loading'
import router from './router'
import { restaurantStore } from './stores/restaurantStore'
import { StoreProps } from './stores/store'

const stores: StoreProps = {
  restaurantStore,
}

const App = () => (
  <Suspense fallback={<Loading />}>
    <Provider {...stores}>
      <RouterProvider router={router} />
    </Provider>
  </Suspense>
)

export default App
