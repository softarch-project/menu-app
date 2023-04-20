import { FullMenu, ShortMenu } from '../models/Menu.model'
import { Response } from '../models/Response.model'

const emptyShortMenu: ShortMenu = {
  name: '',
  id: '',
  thumbnailImage: '',
  fullPrice: 0,
  discountedPercent: 0,
  sold: 0,
  totalInStock: 0
}

const emptyFullMenu: FullMenu = {
  name: '',
  id: '',
  thumbnailImage: '',
  fullPrice: 0,
  discountedPercent: 0,
  sold: 0,
  totalInStock: 0,
  options: []
}

export const getShortMenu = async (
  restaurantId: number,
  menuName: string
): Promise<Response<ShortMenu>> => {
  return { status: 200, data: emptyShortMenu }
}

export const getFullMenu = async (
  restaurantId: number,
  menuName: string
): Promise<Response<FullMenu>> => {
  return { status: 200, data: emptyFullMenu }
}
