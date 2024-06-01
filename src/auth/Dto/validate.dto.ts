import { IsString, IsEmail, MaxLength, MinLength } from 'class-validator';

export class validateUser {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    password: string;
}