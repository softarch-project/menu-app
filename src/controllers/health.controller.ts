import { Request, Response } from 'express'
import { isReady } from '../startup'


export const healthCheck = (req: Request, res: Response) => res.sendStatus(200)

export const livenessCheck = (req: Request, res: Response) => {
  if (isReady) {
    res.sendStatus(200)
  } else {
    res.sendStatus(500)
  }
}
