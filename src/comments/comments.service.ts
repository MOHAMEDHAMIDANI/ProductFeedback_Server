import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './Comment.entity';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './Dto/CreateComment.dto';
import { Feedback } from 'src/feedback/Feedback.entity';

@Injectable()
export class CommentsService {
    constructor(@InjectRepository(Comment) private CommentRepository : Repository<Comment> , @InjectRepository(Feedback) private FeedbackRepository : Repository<Feedback> ){

    }
    async CreateComment ( CommentDto : CreateCommentDto) : Promise<Comment>{
        const { content , feedbackId} = CommentDto 
        const feedback : Feedback = await this.FeedbackRepository.findOne({where: {id: feedbackId}})
        const comment : Comment = await this.CommentRepository.create({
            content,
            feedback,
        })
        await this.CommentRepository.save(comment)
        return comment
    }
    async GetComments( feedbackId : string) : Promise<Comment[]> {
        const feedback : Feedback = await this.FeedbackRepository.findOne({where: {id: feedbackId}})
        return await this.CommentRepository.find({where: {feedback: feedback}})
    }
}
