import { GoogleOAuthGuard } from '../auth/guards/google-oauth.guard';
import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { GoogleService } from './socialLogin.service';

@Controller('auth')
export class GoogleController {
  constructor(private readonly appService: GoogleService) {}

  @Get('google')
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Request() req) {}

  @Get('google/redirect')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Request() req) {
    return this.appService.googleLogin(req);
  }
}
