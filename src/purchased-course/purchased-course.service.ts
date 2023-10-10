import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PurchasedCourse } from './schemas/purchaseed-course.schema';
import mongoose from 'mongoose';

@Injectable()
export class PurchasedCourseService {
  constructor(
    @InjectModel(PurchasedCourse.name)
    private purchaseCourseModel: mongoose.Model<PurchasedCourse>,
  ) {}
}
