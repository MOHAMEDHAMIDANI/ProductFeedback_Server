import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Feedback } from './Feedback.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FeedbackService {
    constructor(@InjectRepository(Feedback) private FeedbackRepository : Repository<Feedback>){

    }
}
