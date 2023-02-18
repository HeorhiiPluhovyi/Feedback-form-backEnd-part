import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFeedbackDto } from './DTO/create-feedback.dto';
import { FeedbackService } from './feedback.service';

@Controller('/API')
export class FeedbackController {
  constructor(private fs: FeedbackService) {}

  @Get('/feedback')
  getAllFeedbackMassages() {
    return this.fs.getAllFeedbackMassages();
  }

  @Post('/feedback')
  createFeedbackMassage(@Body() feedbackDto: CreateFeedbackDto) {
    return this.fs.createFeedbackMassage(feedbackDto);
  }
}
