import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../user/user.schema';
import { GoogleController } from './socialLogin.controller';
import { GoogleService } from './socialLogin.service';
import { GoogleStrategy } from '../auth/strategies/google.strategy';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [GoogleController],
  providers: [GoogleStrategy, GoogleService],
})
export class GoogleModule {}
