import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './schemas/course.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course.name)
    private courseModel: mongoose.Model<Course>,
  ) {}

  // find all courses
  async findAll(): Promise<Course[]> {
    const courses = await this.courseModel.find();
    return courses;
  }

  // create book function
  async createCourse(course: Course): Promise<Course> {
    const res = await this.courseModel.create(course);
    return res;
  }
}
