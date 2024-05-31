import { IsString, MaxLength, MinLength } from "class-validator";

export class LoginDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    email : string
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    password : string;
}