import { IsEnum, IsNotEmpty, } from "class-validator";
import { Category } from "../Category.enum";

export class CreateFeedbackDto {
    @IsNotEmpty()
    title  : string;  
    @IsNotEmpty()
    description ; 
    @IsNotEmpty()
    @IsEnum(Category)
    category : Category;
}