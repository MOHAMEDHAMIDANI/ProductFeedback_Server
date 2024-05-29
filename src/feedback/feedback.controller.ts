import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './Dto/createFeedback.dto';
import { UpdateFeedbackDto } from './Dto/updateFeedback.dto';
import { Feedback } from './Feedback.entity';
import { feedbackFilterDto } from './Dto/feedbackFilter.dto';

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
    @Get('/filtering')
    async GetFeedbacksWithFilter(@Query() FeedbackFilter: feedbackFilterDto): Promise<Feedback[]> {
        return await this.feedbackService.GetFeedbacksWithFilter(FeedbackFilter);
    }
    @Put("/like/:id")
    async LikeAndUnlike(@Param("id") id : string, @Body('like') LikeAndUnlikeBoolean : boolean) : Promise<Feedback> {
        return await this.feedbackService.LikeAndUnlike(id, LikeAndUnlikeBoolean)
    }
    @Delete("/:id")
    async DeleteFeedback(@Param("id") id : string) : Promise<Feedback> {
        return await this.feedbackService.DeleteFeedback(id)
    }
}
