import {
  Controller,
  Request,
  Post,
  Body,
  Get,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { userDto } from 'src/dtos/user/user.dto';
import { loginDto } from 'src/dtos/user/login.dto';
import { jwtAuth } from './jwtAuth.guard';

@Controller('auth')
export class authcontroller {
  constructor(private authServices: AuthService) {}
  @Post('register')
  async register(@Body() user: userDto) {
    return await this.authServices.create(user);
  }
  @Post('login')
  async Login(@Body() loginDto: loginDto) {
    return this.authServices.login(loginDto);
  }
  @UseGuards(jwtAuth)
  @Get('/test')
  async tester(@Request() req) {
    return req.user;
  }
}
