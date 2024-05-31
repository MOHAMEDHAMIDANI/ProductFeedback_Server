import { Module } from '@nestjs/common';
import { FeedbackController } from './feedback/feedback.controller';
import { FeedbackService } from './feedback/feedback.service';
import { FeedbackModule } from './feedback/feedback.module';
import { UserModule } from './user/user.module';
import { CommentsController } from './comments/comments.controller';
import { CommentsService } from './comments/comments.service';
import { CommentsModule } from './comments/comments.module';
import { RepliesService } from './replies/replies.service';
import { RepliesModule } from './replies/replies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from './feedback/Feedback.entity';
import { User } from './user/User.entity';
import { Comment } from './comments/Comment.entity';
import { Reply } from './replies/reply.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [FeedbackModule, UserModule, CommentsModule, RepliesModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'mohamed',
    database: 'Feedback',
    synchronize: true,
    entities: [Feedback , User , Comment , Reply],
    autoLoadEntities: true,
  }), AuthModule],
  controllers: [FeedbackController, CommentsController],
  providers: [FeedbackService, CommentsService, RepliesService],
})
export class AppModule { }
