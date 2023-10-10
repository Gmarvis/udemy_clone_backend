import { Body, Controller, Get, Post } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './schemas/course.schema';

@Controller('courses')
export class CourseController {
  constructor(private courseService: CourseService) {}

  //get all courses
  @Get()
  async getAllCourses(): Promise<Course[]> {
    return this.courseService.findAll();
  }

  //Post a course
  @Post()
  async createCourse(
    @Body()
    course,
  ): Promise<Course> {
    return this.courseService.createCourse(course);
  }
}
