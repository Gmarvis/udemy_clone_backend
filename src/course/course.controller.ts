import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './schemas/course.schema';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CourseController {
  constructor(private courseService: CourseService) {}

  //get all courses
  @Get()
  async getAllCourses(): Promise<Course[]> {
    return this.courseService.findAll();
  }

  //Get course by id
  @Get(':id')
  async getCourse(
    @Param('id')
    id: string,
  ): Promise<Course> {
    return this.courseService.findById(id);
  }

  //delete course
  @Delete(':id')
  async deleteCourse(
    @Param('id')
    id: string,
  ): Promise<Course> {
    return this.courseService.findAndDelete(id);
  }

  //Post a course
  @Post(':id')
  async createCourse(
    @Body()
    course: CreateCourseDto,
  ): Promise<Course> {
    return this.courseService.createCourse(course);
  }

  //Find Course and update
  @Put(':id')
  async UpdateCourse(
    @Param('id')
    id: string,
    @Body()
    course: UpdateCourseDto,
  ): Promise<Course> {
    return this.courseService.UpdateById(id, course);
  }
}
