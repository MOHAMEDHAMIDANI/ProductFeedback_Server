import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reply } from './reply.entity';
import { Repository } from 'typeorm';
import { Comment } from 'src/comments/Comment.entity';
import { ReplyDto } from './Dto/CreateReply.dto';

@Injectable()
export class RepliesService {
    constructor(@InjectRepository(Reply) private replyRepository : Repository<Reply> , @InjectRepository(Comment) private CommentRepository : Repository<Comment>){
        
    }
    async createReply(ReplyDto: ReplyDto) : Promise<Reply>{
        const { content , commentId }  = ReplyDto 
        const comment = await this.CommentRepository.findOne({where : { id : commentId}})
        const reply = await this.replyRepository.create({
            content,
            comment
        })
        await this.replyRepository.save(reply)
        return reply
    }
}
