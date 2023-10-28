import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './schemas/course.schema';
import * as mongoose from 'mongoose';
import { User } from '../auth/schemas/user.schema';
import { Query } from 'express-serve-static-core';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course.name)
    private courseModel: mongoose.Model<Course>,
  ) {}

  // find all courses
  async findAll(query: Query): Promise<Course[]> {
    // search keyword
    const keyword = query.keyword
      ? {
          author: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};
    const courses = await this.courseModel.find({ ...keyword });
    return courses;
  }

  // create course function
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

  // filter couses by category
  async findByCategory(query: Query): Promise<Course[]> {
    // search keyword
    const keyword = query.keyword
      ? {
          category: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};
    const courses = await this.courseModel.find({ ...keyword });
    return courses;
  }

  // filter couses by subCategory
  async findBySubCategory(query: Query): Promise<Course[]> {
    // search keyword
    const keyword = query.keyword
      ? {
          subcategory: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};
    const courses = await this.courseModel.find({ ...keyword });
    return courses;
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

  async findCoursesByAuthor(authorId: string, role: string): Promise<Course[]> {
    return await this.courseModel.find({ author: authorId, role }).exec();
  }

  // find course and delete
  async findAndDelete(id: string): Promise<Course> {
    const course = await this.courseModel.findByIdAndDelete(id);

    if (!course) {
      throw new NotFoundException('course not found');
    }
    return course;
  }

  // async saveCourseForLater(courseId: string): Promise<boolean> {
  //   const id = new mongoose.Types.ObjectId(courseId);
  //   const existingCourse = await this.courseModel.findById({ _id: id }).exec();
  //   existingCourse.isSaveForLater = true;
  //   console.log('existingCourse: ', existingCourse);
  //   const savedCourse = await existingCourse.save();
  //   console.log(' service savedCourse: ', savedCourse);
  //   if (savedCourse) return true;
  //   else return false;
  // }
}
