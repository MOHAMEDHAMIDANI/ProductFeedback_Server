import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './Comment.entity';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { User } from 'src/user/User.entity';
import { Feedback } from 'src/feedback/Feedback.entity';
import { Reply } from 'src/replies/reply.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Feedback , User , Comment , Reply])],
    controllers: [CommentsController],
    providers: [CommentsService],
    exports: [TypeOrmModule]
})
export class CommentsModule {
    
}
