import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export interface CustomRequest extends Request {
  userId?: string;
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: CustomRequest, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;

      const token = authorization && authorization.split(' ')[1];
      if (!token) throw new Error('No token found');
      const decoded = verify(token, 'secret');
      // @ts-ignore
      const { id } = decoded;
      req.userId = id;
      next();
    } catch (e) {
      next(e.message);
    }
  }
}
