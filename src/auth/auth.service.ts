import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginDto } from 'src/auth/dto/user-login.dto';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(userInfo: LoginDto) {
    const { username, password } = userInfo;
    const user = await this.validateUser(username, password);
    return user;
  }

  async register(user: User) {
    return this.usersService.create(user);
  }
}
