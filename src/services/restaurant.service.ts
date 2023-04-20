import Restaurant from '../models/Restaurant.model'
import { Response } from '../models/Response.model'

export const getRestaurant = async (
  restaurantId: number
): Promise<Response<Restaurant>> => {
  return {
    status: 200,
    data: {
      name: 'Not Found',
      id: 0,
      coverImage: '',
      menus: [],
      activeTimePeriod: { open: '', close: '' }
    }
  }
}
