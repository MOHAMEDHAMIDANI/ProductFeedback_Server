import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { RepliesService } from './replies.service';
import { ReplyDto } from './Dto/CreateReply.dto';
import { Reply } from './reply.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('replies')
export class RepliesController {
    constructor(private replyServices : RepliesService) { 

    }
    @UseGuards(JwtAuthGuard)
    @Post()
    createReply(@Body() ReplyDto : ReplyDto) : Promise<Reply> {
        return this.replyServices.createReply(ReplyDto);
    }
}
