import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SaveForLater } from './schema/saveforlater.schema';
import mongoose from 'mongoose';
import { Course } from 'src/course/schemas/course.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CourseService } from 'src/course/course.service';

@Injectable()
export class SaveforlaterService {
  constructor(
    @InjectModel('SaveForLater')
    private readonly saveForLaterModel: mongoose.Model<SaveForLater>,
    private courseService: CourseService,
  ) {}

  async saveCourseForLater(courseId: string, userId: string): Promise<Course> {
    console.log(`in service saveCourse`);
    const uId = new mongoose.Types.ObjectId(userId);
    const cId = new mongoose.Types.ObjectId(courseId);

    const existingCourseSaved = await this.saveForLaterModel.findOne({
      course: cId,
      user: uId,
    });

    if (existingCourseSaved) {
      return this.courseService.findById(existingCourseSaved.course.toString());
    } else {
      const newCourse = new this.saveForLaterModel({
        course: cId,
        user: uId,
      });

      const saved = await newCourse.save();
      console.log('newCourse: ', saved);
      if (saved) return this.courseService.findById(saved.course.toString());
      else
        throw new HttpException(
          'error saving course for later',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
    }
  }

  async getSavedCourse(userId: string): Promise<Course[]> {
    console.log(`in service getsaveforlater`);
    const savedCourses = await this.saveForLaterModel
      .find({ user: userId })
      .exec();

    const courses = await Promise.all(
      savedCourses?.map((course) =>
        this.courseService.findById(course.course.toString()),
      ),
    );

    if (courses && courses.length) {
      console.log(courses);
      return courses;
    }
    return [];
  }

  async removeSavedCourse(
    courseId: string,
    userId: string,
  ): Promise<SaveForLater> {
    console.log('hit remove service');

    const removedCourse = await this.saveForLaterModel.findOneAndDelete({
      course: courseId,
      user: userId,
    });

    return removedCourse;
  }
}
