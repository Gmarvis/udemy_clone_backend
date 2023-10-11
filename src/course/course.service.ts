import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './schemas/course.schema';
import * as mongoose from 'mongoose';
import { User } from '../auth/schemas/user.schema';

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
  async createCourse(course: Course, user: User): Promise<Course> {
    const data = Object.assign(course, { author: user.name });

    const res = await this.courseModel.create(data);
    return res;
  }

  // find course by id
  async findById(id: string): Promise<Course> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('please enter a valid id');
    }

    const course = await this.courseModel.findById(id);

    if (!course) {
      throw new NotFoundException('course not found');
    }

    return course;
  }

  // Update course by ID
  async UpdateById(id: string, course: Course): Promise<Course> {
    return await this.courseModel.findByIdAndUpdate(id, course, {
      new: true,
      runValidators: true,
    });
  }

  //get course by Authors name
  /*******************find course by author is not working yet************************/
  async findByAuthor(name: string): Promise<Course[]> {
    return await this.courseModel.find({ name });
  }
  /*******************find course by author is not working yet************************/

  // find course and delete
  async findAndDelete(id: string): Promise<Course> {
    const course = await this.courseModel.findByIdAndDelete(id);

    if (!course) {
      throw new NotFoundException('course not found');
    }
    return course;
  }
}
