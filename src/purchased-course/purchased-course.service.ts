import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PurchasedCourse } from './schemas/purchaseed-course.schema';
import mongoose from 'mongoose';
import { CourseService } from 'src/course/course.service';

// import { Course } from 'src/course/schemas/course.schema';
// import { PurshasedCourses } from './dto/purshasedCourses.dto';
// import { User } from 'src/auth/schemas/user.schema';
// import { CourseService } from 'src/course/course.service';

@Injectable()
export class PurchasedCourseService {
  constructor(
    @InjectModel(PurchasedCourse.name)
    private purchaseCourseModel: mongoose.Model<PurchasedCourse>, // @InjectModel(Course.name)
    private courseService: CourseService,
  ) {}
  // private courseModel: mongoose.Model<Course>,

  //create purshased courses
  async purshaseCourses(courseIds: string[], userId: string): Promise<any> {
    const uId = new mongoose.Types.ObjectId(userId);

    const purshasedCoursesSaved = courseIds?.map(
      (id) => new mongoose.Types.ObjectId(id),
    );

    const result = [];
    for (const newId of purshasedCoursesSaved) {
      // console.log('newId', newId);
      const purshasedC = await this.purchaseCourseModel
        .findOne({ userId: uId, purchasedCourse: newId })
        .exec();
      // console.log('purshasedC', purshasedC);
      if (!purshasedC) {
        const newPurshasedC = new this.purchaseCourseModel({
          userId: uId,
          purchasedCourse: newId,
        });

        // console.log('newId', newId);
        await newPurshasedC.save();
        // console.log('newPurshasedC', newPurshasedC);
        result.push(newPurshasedC);
      } else {
        console.log('already bought');
      }
    }

    console.log('result: ', result);

    return result;
  }

  async getAllCoursesPaidByAUser(userId: string) {
    console.log('getAllCoursesPaidByAUser');
    const purshaseCourses = await this.purchaseCourseModel.find({
      userId: userId,
    });

    const courses = await Promise.all(
      purshaseCourses?.map((course) => {
        return this.courseService.findById(course.purchasedCourse.toString());
      }),
    );

    return courses;
  }
}
