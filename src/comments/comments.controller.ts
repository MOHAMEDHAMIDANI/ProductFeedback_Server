import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './Dto/CreateComment.dto';
import { Feedback } from 'src/feedback/Feedback.entity';
import { Comment } from './Comment.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('comments')
export class CommentsController {
    constructor(private commentService : CommentsService){

    }
    @UseGuards(JwtAuthGuard)
    @Post()
    CreateComment (@Body() CommentDto : CreateCommentDto) : Promise<Comment> {
        return this.commentService.CreateComment( CommentDto );
    }
    @UseGuards(JwtAuthGuard)
    @Get()
    GetComments ( @Body() FeedbackId : string) : Promise<Comment[]> {
        return this.commentService.GetComments(FeedbackId);
    }
}
