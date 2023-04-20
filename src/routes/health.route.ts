import { Router } from 'express'
import { healthCheck, livenessCheck } from '../controllers/health.controller'


const router = Router()

router.get('/health', healthCheck)

router.get('/liveness', livenessCheck)

export default router
