import { Request, Response } from 'express'
import { getRestaurant } from '../services/restaurant.service'

export const getRestaurantHandler = async (req: Request, res: Response) => {
  const restaurantId = req.params.restaurantId
  const restaurantResponse = await getRestaurant(parseInt(restaurantId))
  res.status(restaurantResponse.status).json(restaurantResponse.data)
}
