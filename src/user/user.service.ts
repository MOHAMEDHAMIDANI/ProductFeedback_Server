import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { User } from './User.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './Dto/CreateUser.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './Dto/LogInUser.dto';
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
    async CreateUser(UserDto : CreateUserDto) :Promise<void> {
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
    async LogInUser(UserDto : LoginDto){
        const { email, password } = UserDto
        const user = await this.findOne(email)
        if (!user) {
            throw new InternalServerErrorException()
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            throw new InternalServerErrorException()
        }
        return "you are in mother fucker"
    }
}
