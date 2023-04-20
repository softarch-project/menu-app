import { Router } from 'express'
import { getRestaurantHandler } from '../controllers/restaurant.controller'
import menusRouter from './menu.route'

const router = Router()

router.get('/:restaurantId', getRestaurantHandler)

router.use('/:restaurantId/menus', menusRouter)

export default router
