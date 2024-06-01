import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { User } from './User.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './Dto/CreateUser.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './Dto/LogInUser.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    async findOne(email: string): Promise<User | undefined> {
        const user = await this.userRepository.findOne({ where: { email } });
        console.log('FindOne Result:', user); // Log user found
        return user;
    }

    async createUser(userDto: CreateUserDto): Promise<void> {
        const { name, email, password } = userDto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = this.userRepository.create({ name, email, password: hashedPassword });
        try {
            await this.userRepository.save(user);
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('User already exists');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async logInUser(userDto: LoginDto): Promise<string> {
        const { email, password } = userDto;
        const user = await this.findOne(email);
        if (!user) {
            throw new InternalServerErrorException();
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new InternalServerErrorException();
        }
        return 'you are in'; // Changed message to be more appropriate
    }
}