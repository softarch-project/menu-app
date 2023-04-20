import { Request, Response } from 'express'
import { ShortMenu } from '../models/Menu.model'
import { getFullMenu, getShortMenu } from '../services/menu.service'

export const getShortMenuHandler = async (req: Request, res: Response) => {
  const restaurantId = req.params.restaurantId
  const menuName = req.params.menuName
  const menuResponse = await getShortMenu(
    parseInt(restaurantId),
    decodeURI(menuName)
  )
  return res.status(menuResponse.status).json(menuResponse.data)
}

export const getMultipleShortMenuHandler = async (
  req: Request,
  res: Response
) => {
  const restaurantId = req.params.restaurantId
  const menus: string[] = req.body.menus
  const menuResponse: ShortMenu[] = []
  for (const menuName of menus) {
    const response = await getShortMenu(
      parseInt(restaurantId),
      decodeURI(menuName)
    )

    if (response.status !== 200) continue
    menuResponse.push(response.data)
  }
  return res.status(200).json(menuResponse)
}

export const getFullMenuHandler = async (req: Request, res: Response) => {
  const restaurantId = req.params.restaurantId
  const menuName = req.params.menuName
  const menuResponse = await getFullMenu(
    parseInt(restaurantId),
    decodeURI(menuName)
  )
  return res.status(menuResponse.status).json(menuResponse.data)
}
