import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from './Feedback.entity';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';

@Module({
    imports : [TypeOrmModule.forFeature([Feedback])],
    providers : [FeedbackService],
    controllers : [FeedbackController],
    exports: [TypeOrmModule]
})
export class FeedbackModule {}
