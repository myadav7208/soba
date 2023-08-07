import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authcontroller } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { userService } from 'src/user/user.service';
import { User } from 'src/entity/user.entity';
import { jwtStrategy } from './jwtStrategy.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'hdfc',
      signOptions: {
        expiresIn: '1d',
      },
    }),
    PassportModule,
  ],
  controllers: [authcontroller],
  providers: [AuthService, userService, jwtStrategy],
})
export class AuthModule {}
