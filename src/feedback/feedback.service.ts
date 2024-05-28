import { Injectable, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Feedback } from './Feedback.entity';
import { Repository } from 'typeorm';
import { CreateFeedbackDto } from './Dto/createFeedback.dto';
import { Status } from './Status.enum';
import { UpdateFeedbackDto } from './Dto/updateFeedback.dto';
import { feedbackFilterDto } from './Dto/feedbackFilter.dto';

@Injectable()
export class FeedbackService {
    constructor(@InjectRepository(Feedback) private FeedbackRepository: Repository<Feedback>) {

    }
    async CreateFeedback(CreateFeedback: CreateFeedbackDto) : Promise<Feedback> {
        const {title , description , category} = CreateFeedback
        const feedback : Feedback = await this.FeedbackRepository.create({
            title,
            description,
            status  : Status.Live,
            category,
            likes: 0,
        })
        await this.FeedbackRepository.save(feedback)
        return feedback
    }
    async GetSingleFeedback(id: string) : Promise<Feedback> { 
        const feedback : Feedback = await this.FeedbackRepository.findOne({where: {id: id}})
        return feedback 
    }
    async GetFeedbacksWithFilter(id: string , FeedbackFilter : feedbackFilterDto) : Promise<Feedback[]> { 
        const {search , status , category} = FeedbackFilter
        const feedback : Feedback[] = await this.FeedbackRepository.find({where: {id: id}})
        return feedback 
    }
    async UpdateFeedback(id : string, UpdateFeedback : UpdateFeedbackDto) : Promise<Feedback> {
        const {title , description , category} = UpdateFeedback 
        const feedback : Feedback = await this.FeedbackRepository.findOne({where: {id: id}})
        feedback.title = title
        feedback.description = description
        feedback.category = category
        await this.FeedbackRepository.save(feedback)
        return feedback
    }

}
