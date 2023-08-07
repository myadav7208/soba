import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { userService } from 'src/user/user.service';
@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: userService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'hdfc',
    });
  }
  async validate(payload: any) {
    return payload;
  }
}
