import express, { Express, Router } from 'express'
import Constant from './constant'
import HealthRouter from './routes/health.route'
import ClientRouter from './routes/clientside.route'
import RestaurantRouter from './routes/restaurant.route'

const port = Constant.PORT
const app: Express = express()
const apiRouter = Router()

apiRouter.use('/restaurants', RestaurantRouter)
apiRouter.use('/_z', HealthRouter)

app.use('/api', apiRouter)
app.use('/', ClientRouter)

app.listen(port)
