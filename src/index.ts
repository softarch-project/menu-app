import express, { Express, Router } from 'express'
import Constant from './constant'
import HealthRouter from './routes/health.route'
import ClientRouter from './routes/clientside.route'

const port = Constant.PORT
const app: Express = express()
const apiRouter = Router()

apiRouter.use('/_z', HealthRouter)

app.use(ClientRouter)
app.use('/api', apiRouter)

app.listen(port)
