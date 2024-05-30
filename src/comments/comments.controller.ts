import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './Dto/CreateComment.dto';
import { Feedback } from 'src/feedback/Feedback.entity';
import { Comment } from './Comment.entity';

@Controller('comments')
export class CommentsController {
    constructor(private commentService : CommentsService){

    }
    @Post()
    CreateComment (@Body() CommentDto : CreateCommentDto) : Promise<Comment> {
        return this.commentService.CreateComment( CommentDto );
    }
    @Get()
    GetComments ( @Body() FeedbackId : string) : Promise<Comment[]> {
        return this.commentService.GetComments(FeedbackId);
    }
}
