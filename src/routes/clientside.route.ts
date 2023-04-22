import express, { Router } from 'express'
import path from 'path'

const clientPath = path.join(__dirname, '../..', 'clientside', 'dist')
const router = Router()

router.use(express.static(clientPath))

router.get('*', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'))
})

export default router
