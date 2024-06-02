import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { validateUser } from './Dto/validate.dto';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/User.entity';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(private userServices: UserService,
        private jwtService: JwtService) {

    }

    async validateUser(userCoordinate: validateUser): Promise<any> {
        const { email, password } = userCoordinate;
        const user = await this.userServices.findOne(email);
        if (!user) {
            return null;
        }
        if (!password || !user.password) {
            return null;
        }

        const isValidPassword = await bcrypt.compare(password, user.password); 
        if (isValidPassword) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async Login(user: User) {
        const payload = { email: user.email, sub: user.id };
        const accessToken = this.jwtService.sign(payload);
        return {
            access_token: accessToken,
        };
    }
}