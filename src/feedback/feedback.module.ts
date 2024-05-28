import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from './Feedback.entity';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { User } from 'src/user/User.entity';
import { Reply } from 'src/replies/reply.entity';
import { Comment } from 'src/comments/Comment.entity';

@Module({
    imports : [TypeOrmModule.forFeature([Feedback , User , Comment , Reply])],
    providers : [FeedbackService],
    controllers : [FeedbackController],
    exports: [TypeOrmModule]
})
export class FeedbackModule {}
