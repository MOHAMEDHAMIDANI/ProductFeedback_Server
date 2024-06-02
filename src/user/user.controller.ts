import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './Dto/CreateUser.dto';
import { LoginDto } from './Dto/LogInUser.dto';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthService } from 'src/auth/auth.service';

@Controller('user')
export class UserController {
    constructor(private userServices: UserService , private authService : AuthService) {}

    @Post('/signup')
    createUser(@Body() userDto: CreateUserDto): Promise<void> {
        return this.userServices.createUser(userDto);
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    logInUser(@Request() req) {
        return this.authService.Login(req.user)
    }
}