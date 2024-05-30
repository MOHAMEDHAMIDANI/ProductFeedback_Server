import { IsNotEmpty, minLength } from "class-validator";

export class ReplyDto {
    @IsNotEmpty()
    content : string;
    @IsNotEmpty()
    commentId : string;

}