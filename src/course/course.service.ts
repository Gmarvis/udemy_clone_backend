import { Injectable, NotFoundException } from '@nestjs/common';
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

  // find course by id
  async findById(id: string): Promise<Course> {
    const course = await this.courseModel.findById(id);

    if (!course) {
      throw new NotFoundException('course not found');
    }

    return course;
  }

  // Update book by ID
  async UpdateById(id: string, course: Course): Promise<Course> {
    return await this.courseModel.findByIdAndUpdate(id, course, {
      new: true,
      runValidators: true,
    });
  }

  // find course and delete
  async findAndDelete(id: string): Promise<Course> {
    const course = await this.courseModel.findByIdAndDelete(id);
    return course;
  }
}
