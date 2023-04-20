import { Router } from 'express'
import {
  getFullMenuHandler,
  getMultipleShortMenuHandler,
  getShortMenuHandler
} from '../controllers/menu.controller'

const router = Router({ mergeParams: true })

router.get('/:menuName/short', getShortMenuHandler)

router.post('/short', getMultipleShortMenuHandler)

router.get('/:menuName/full', getFullMenuHandler)

export default router
