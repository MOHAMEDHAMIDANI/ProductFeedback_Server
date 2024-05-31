import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto { 
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    name : string;
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    password : string;
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    email : string;
}