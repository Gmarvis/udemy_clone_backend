import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './schemas/course.schema';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { AuthGuard } from '@nestjs/passport';

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

  /*******************find course by author is not working yet************************/
  @Get('author/:name')
  async getByAuthor(
    @Param('name')
    name: string,
  ): Promise<Course[]> {
    return this.getByAuthor(name);
  }
  /*******************find course by author is not working yet************************/

  //delete course
  @Delete(':id')
  async deleteCourse(
    @Param('id')
    id: string,
  ): Promise<Course> {
    return this.courseService.findAndDelete(id);
  }

  //Post a course
  @Post()
  @UseGuards(AuthGuard())
  async createCourse(
    @Body()
    course: CreateCourseDto,
    @Req() req,
  ): Promise<Course> {
    // console.log(req);
    return this.courseService.createCourse(course, req.user);
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
