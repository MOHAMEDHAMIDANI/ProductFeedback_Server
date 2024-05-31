import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { User } from './User.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './Dto/CreateUser.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private UserRepository : Repository<User> ){
    }
    async findOne(email : string ): Promise<User | undefined> { 
        const user = await this.UserRepository.findOne({where : { email : email}});
        if(user){
            return user
        }else {
            return undefined
        }
    }
    async CreateUser(UserDto : CreateUserDto){
        const { name , email , password } = UserDto
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = await this.UserRepository.create({name , email , password : hashedPassword })
        try {
            await this.UserRepository.save(user);
        } catch (error) {
            if (error.code === "23505") {
                throw new ConflictException("User already exists");
            }
            else {
                throw new InternalServerErrorException()
            }
        }
    }

}
