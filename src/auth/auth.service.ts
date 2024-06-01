import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { validateUser } from './Dto/validate.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userServices: UserService) {}

    async validateUser(userCoordinate: validateUser): Promise<any> {
        const { email, password } = userCoordinate;
        console.log('User Coordinate:', userCoordinate); // Log input

        const user = await this.userServices.findOne(email);
        if (!user) {
            console.log('User not found'); // Log if user not found
            return null;
        }
        console.log('Retrieved User:', user); // Log user data

        // Ensure both arguments to bcrypt.compare are defined and valid
        if (!password || !user.password) {
            console.error('Password or user.password is undefined');
            return null;
        }

        const isValidPassword = await bcrypt.compare(password, user.password); // Correct order
        console.log('IsValidPassword:', isValidPassword); // Log password check result

        if (isValidPassword) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}