import { Request, Response, NextFunction } from 'express';

interface Auth {
  signup(request: Request, response: Response, next: NextFunction): Response<any, Record<string, any>>;
}

export class AuthController implements Auth {
  public signup(request: Request, response: Response, next: NextFunction) {
    return response.status(200).json({ msg: 'SIGNUP SUCCESS' });
  }
}
