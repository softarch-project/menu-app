import express, { Express, Router } from 'express'
import Constant from './constant'
import HealthRouter from './routes/health.route'
import ClientRouter from './routes/clientside.route'
import RestaurantRouter from './routes/restaurant.route'
import cors, { CorsOptions } from 'cors'

const port = Constant.PORT
const app: Express = express()
const apiRouter = Router()
const corsOptions: CorsOptions = {
  origin: '*'
}

apiRouter.use(cors(corsOptions))
apiRouter.use('/restaurants', RestaurantRouter)
apiRouter.use('/_z', HealthRouter)

app.use(ClientRouter)
app.use('/api', apiRouter)

app.listen(port)
