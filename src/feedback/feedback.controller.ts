import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './Dto/createFeedback.dto';
import { UpdateFeedbackDto } from './Dto/updateFeedback.dto';
import { Feedback } from './Feedback.entity';

@Controller('feedback')
export class FeedbackController {
    constructor( private feedbackService : FeedbackService ){

    }
    @Post()
    async CreateFeedback(@Body()CreateFeedbackDto: CreateFeedbackDto) {
        return await this.feedbackService.CreateFeedback(CreateFeedbackDto)
    }
    @Get("/:id")
    async GetSingleFeedback(@Param("id") id : string) {
        return await this.feedbackService.GetSingleFeedback(id)
    }
    @Put("/:id")
    async UpdateFeedback(@Param("id") id : string, @Body() UpdateFeedback: UpdateFeedbackDto) : Promise<Feedback>{
        return await this.feedbackService.UpdateFeedback(id, UpdateFeedback)
    }
}
