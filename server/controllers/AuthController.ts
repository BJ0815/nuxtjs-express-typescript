import { Request, Response } from 'express'

class AuthController {
  echo(_req: Request, res: Response) {
    res.send('echo')
  }
}

export default AuthController
