import { Router } from 'express'
import { CreateNewOrder, GetBillDetail } from '../controllers/order.controller'

const router = Router()

router.get('/:billId', GetBillDetail)

router.post('/:billId/new', CreateNewOrder)

export default router
