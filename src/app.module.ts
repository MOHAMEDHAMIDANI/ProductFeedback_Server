import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackModule } from './feedback/feedback.module';
import { UserModule } from './user/user.module';
import { CommentsModule } from './comments/comments.module';
import { RepliesModule } from './replies/replies.module';
import { AuthModule } from './auth/auth.module';
import { Feedback } from './feedback/Feedback.entity';
import { User } from './user/User.entity';
import { Comment } from './comments/Comment.entity';
import { Reply } from './replies/reply.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'mohamed',
            database: 'Feedback',
            synchronize: true,
            entities: [Feedback, User, Comment, Reply],
            autoLoadEntities: true,
        }),
        FeedbackModule,
        UserModule,
        CommentsModule,
        RepliesModule,
        AuthModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
