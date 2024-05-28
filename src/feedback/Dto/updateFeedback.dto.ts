import { IsEnum, isEnum, IsNotEmpty } from "class-validator";
import { Category } from "../Category.enum";

export class UpdateFeedbackDto {
    @IsNotEmpty()
    title : string;  
    @IsNotEmpty()
    description ; 
    @IsNotEmpty()
    @IsEnum(Category)
    category : Category;
}