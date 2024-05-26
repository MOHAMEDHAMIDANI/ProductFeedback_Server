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

@Module({
  imports: [FeedbackModule, UserModule, CommentsModule, RepliesModule],
  controllers: [FeedbackController, CommentsController],
  providers: [FeedbackService, CommentsService, RepliesService],
})
export class AppModule {}
