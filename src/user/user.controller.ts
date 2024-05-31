import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './User.entity';
import { CreateUserDto } from './Dto/CreateUser.dto';

@Controller('user')
export class UserController {
    constructor(private UserServices : UserService){

    }
    @Post("/signup")
    CreateUser(@Body() UserDto : CreateUserDto) : Promise<User>{
        return this.UserServices.CreateUser(UserDto);
    }
}
