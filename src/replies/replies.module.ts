import { Module } from '@nestjs/common';
import { RepliesController } from './replies.controller';

@Module({
  controllers: [RepliesController]
})
export class RepliesModule {}
