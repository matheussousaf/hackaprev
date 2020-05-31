import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Param,
  Get,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { LoginDto } from './dto/user-login.dto';
import { AuthService } from 'src/auth/auth.service';

@Controller('user')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('register')
  async registerUser(@Body() user: User) {
    try {
      const savedUser = await this.authService.register(user);
      return savedUser;
    } catch (err) {
      throw new HttpException('User already exists.', HttpStatus.CONFLICT);
    }
  }

  @Post('login')
  async loginUser(@Body() userInfo: LoginDto) {
    return await this.authService.login(userInfo);
  }
}
