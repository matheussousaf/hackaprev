import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginDto } from 'src/auth/dto/user-login.dto';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(userInfo: LoginDto): Promise<any> {
    const { email, password } = userInfo;

    const user = await this.usersService.findOne(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    throw new HttpException('Incorrect credentials.', HttpStatus.UNAUTHORIZED);
  }

  async login(userInfo: LoginDto) {
    return await this.validateUser(userInfo);
  }

  async register(user: User) {
    try {
      const savedUser = await this.usersService.create(user);
      return savedUser;
    } catch (err) {
      throw new HttpException('User already exists.', HttpStatus.CONFLICT);
    }
  }
}
