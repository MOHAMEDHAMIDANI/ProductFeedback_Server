import { Body, Controller, Post } from '@nestjs/common';
import { RepliesService } from './replies.service';
import { ReplyDto } from './Dto/CreateReply.dto';
import { Reply } from './reply.entity';

@Controller('replies')
export class RepliesController {
    constructor(private replyServices : RepliesService) { 

    }

    @Post()
    createReply(@Body() ReplyDto : ReplyDto) : Promise<Reply> {
        return this.replyServices.createReply(ReplyDto);
    }
}
