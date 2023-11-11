import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleService {
  googleLogin(req) {
    console.log('ser');
    if (!req.user) {
      return 'No user from google';
    }

    return {
      message: 'User information from google',
      user: req.user,
    };
  }
}
