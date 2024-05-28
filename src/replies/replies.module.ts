import { Module } from '@nestjs/common';
import { RepliesController } from './replies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reply } from './reply.entity';
import { RepliesService } from './replies.service';
import { Feedback } from 'src/feedback/Feedback.entity';
import { User } from 'src/user/User.entity';
import { Comment } from 'src/comments/Comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Feedback , User , Comment , Reply])],
  controllers: [RepliesController],
  providers: [RepliesService],
  exports : [TypeOrmModule]
})
export class RepliesModule {}
