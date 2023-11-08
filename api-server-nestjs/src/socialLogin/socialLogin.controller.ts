import { GoogleOAuthGuard } from '../auth/guards/goggle-oauth.guard';
import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AppService } from './socialLogin.service';

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Request() req) {}

  @Get('google/redirect')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Request() req) {
    return this.appService.googleLogin(req);
  }
}
