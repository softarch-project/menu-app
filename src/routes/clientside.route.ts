import express, { Router } from 'express'
import path from 'path'


const clientPath = path.join(__dirname, '../..', 'clientside', 'dist')
const router = Router()

router.use(express.static(clientPath))

export default router
