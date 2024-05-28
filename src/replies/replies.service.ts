import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reply } from './reply.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RepliesService {
    constructor(@InjectRepository(Reply) private replyRepository : Repository<Reply>){
        
    }
}
