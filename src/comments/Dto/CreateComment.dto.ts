import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateCommentDto {
    @MaxLength(500)
    @MinLength(10)
    @IsNotEmpty()
    content : string;
    @IsNotEmpty()
    feedbackId : string;
}