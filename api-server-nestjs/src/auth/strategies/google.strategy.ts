import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID:
        '917930593794-i6qpe8o6l4jb8rdda59hq5r0v0l8i99v.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:5000/auth/google/redirect',
      scope: ['profile', 'email'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { id, name, emails, photos } = profile;
    console.log('dagdsgasgdgasdgj 1111');
    const user = {
      // provider: 'google',
      // providerId: id,
      email: emails[0].value,
      name: `${name.givenName} ${name.familyName}`,
    };

    done(null, user);
  }
}
