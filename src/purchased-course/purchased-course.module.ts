import { Module } from '@nestjs/common';
import { PurchasedCourseController } from './purchased-course.controller';
import { PurchasedCourseService } from './purchased-course.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PurchasedCourseSchema } from './schemas/purchaseed-course.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PurchasedCourse', schema: PurchasedCourseSchema },
    ]),
  ],
  controllers: [PurchasedCourseController],
  providers: [PurchasedCourseService],
})
export class PurchasedCourseModule {}
