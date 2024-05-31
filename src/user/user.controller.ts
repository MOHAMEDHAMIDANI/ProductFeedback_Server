import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './User.entity';
import { CreateUserDto } from './Dto/CreateUser.dto';
import { LoginDto } from './Dto/LogInUser.dto';

@Controller('user')
export class UserController {
    constructor(private UserServices : UserService){

    }
    @Post("/signup")
    CreateUser(@Body() UserDto : CreateUserDto) : Promise<void>{
        return this.UserServices.CreateUser(UserDto);
    }

    @Post("/login")
    LogInUser(@Body() UserDto : LoginDto){
        return this.UserServices.LogInUser(UserDto);
    }
}
