import { IsEnum, IsOptional, IsString } from "class-validator";
import { Category } from "../Category.enum";
import { Status } from "../Status.enum";

export class feedbackFilterDto {
    @IsOptional()
    @IsString()
    search : string;
    @IsOptional()
    @IsEnum(Status)
    status : Status ;
    @IsOptional()
    @IsEnum(Category)
    category : Category ;
}