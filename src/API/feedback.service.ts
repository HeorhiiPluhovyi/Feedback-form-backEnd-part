import { Injectable } from '@nestjs/common';
import { FeedbackModel } from './feedback.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFeedbackDto } from './DTO/create-feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectModel(FeedbackModel) private feedback: typeof FeedbackModel,
  ) {}
  sendUsers() {
    return 'All users go ...';
  }

  async createFeedbackMassage(dto: CreateFeedbackDto) {
    const feedbackMassage = await this.feedback.create(dto);
    return feedbackMassage;
  }

  async getAllFeedbackMassages() {
    const feedbackMassages = await this.feedback.findAll();
    return feedbackMassages;
  }
}
