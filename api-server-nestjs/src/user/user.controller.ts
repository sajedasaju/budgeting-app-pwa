import { Body, Controller, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { SignupDto } from './dtos/signup.dto';
import { Response } from 'express';
import { LoginDto } from './dtos/login.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signUp(@Body() body: SignupDto, @Res() res: Response) {
    try {
      const user = await this.userService.signup(body);

      user.password = undefined;
      res.json({
        status: 201,
        message: 'signed up successfully',
        user,
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message,
        user: null,
      });
    }
  }
  @Post('login')
  async login(@Body() body: LoginDto, @Res() res: Response) {
    try {
      console.log('body',body)
      const token = await this.userService.login(body);
      console.log('token',token)
      res.json({
        status: 200,
        message: 'Login successfully',
        token,
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message,
      });
    }
  }
}
