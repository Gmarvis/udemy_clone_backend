import { Module } from '@nestjs/common';
import { PurchasedCourseController } from './purchased-course.controller';
import { PurchasedCourseService } from './purchased-course.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PurchasedCourseSchema } from './schemas/purchaseed-course.schema';
import { CourseModule } from 'src/course/course.module';
// import { CourseModule } from 'src/course/course.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PurchasedCourse', schema: PurchasedCourseSchema },
    ]),
    CourseModule,
  ],
  controllers: [PurchasedCourseController],
  providers: [PurchasedCourseService],
})
export class PurchasedCourseModule {}
