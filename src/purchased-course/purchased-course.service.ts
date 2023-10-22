import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PurchasedCourse } from './schemas/purchaseed-course.schema';
import mongoose from 'mongoose';
// import { User } from 'src/auth/schemas/user.schema';
// import { CourseService } from 'src/course/course.service';

@Injectable()
export class PurchasedCourseService {
  constructor(
    @InjectModel(PurchasedCourse.name)
    private purchaseCourseModel: mongoose.Model<PurchasedCourse>,
  ) {}

  // create purcahase course
  // async createPurchaseCourse(id: string, user: User): Promise<PurchasedCourse>{
  //   const courseService = CourseService
  //   const
  // }
}
