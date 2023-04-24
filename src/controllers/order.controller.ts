import { Request, Response } from 'express'
import { GetBillDetails, placeOrder } from '../repositories/orderApi.repository'

export const GetBillDetail = async (req: Request, res: Response) => {
  const response = await GetBillDetails(req.params.billId)
  return res.status(200).json({ success: true })
}

export const CreateNewOrder = async (req: Request, res: Response) => {
  const { menuName, options, price, photoUrl } = req.body
  const billId = req.params.billId
  const response = await placeOrder(billId, menuName, options, price, photoUrl)
  return res.status(200).json({ success: true })
}
