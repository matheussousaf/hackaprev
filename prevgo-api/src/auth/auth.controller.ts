import { Controller, Post, UseGuards } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { LoginDto } from './dto/user-login.dto';
import { AuthService } from 'src/auth/auth.service';

@Controller('user')
export class AuthController {

    constructor(private userService: UserService, private authService: AuthService){}

    @Post('register')
    async registerUser(user: User) {
        return await this.authService.register(user);
    }

    @Post('get')
    async getUserInfo(username: string) {
        return await this.userService.findOne(username);
    }


    @Post('login')
    async loginUser(userInfo: LoginDto) {
        return await this.authService.login(userInfo);
    }

}
