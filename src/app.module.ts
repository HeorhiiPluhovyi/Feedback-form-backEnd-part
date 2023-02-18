import { Module } from '@nestjs/common';
import { FeedbackModule } from './API/feedback.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { FeedbackModel } from './API/feedback.model';

@Module({
  imports: [
    FeedbackModule,
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_POST),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [FeedbackModel],
      autoLoadModels: true,
    }),
  ],
})
export class AppModule {}
