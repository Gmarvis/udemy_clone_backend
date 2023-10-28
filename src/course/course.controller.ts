import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './schemas/course.schema';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { AuthGuard } from '@nestjs/passport';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { Role } from 'src/auth/guard/roles/roles.enum';
import { Roles } from 'src/auth/guard/roles/roles.decorators';
import { CoursesInterceptor } from './interceptor/interceptor.interceptor';
import { Transform } from 'class-transformer';

@Controller('courses')
export class CourseController {
  constructor(private courseService: CourseService) {}

  //get all courses
  @Get()
  @UseInterceptors(CoursesInterceptor)
  @Transform((value) => value.obj._id.toString())
  async getAllCourses(@Query() query: ExpressQuery): Promise<Course[]> {
    return this.courseService.findAll(query);
  }

  // get courses by categoy name
  @Get('category')
  async getCourseByCategory(@Query() query: ExpressQuery): Promise<Course[]> {
    return this.courseService.findByCategory(query);
  }

  // get courses by subcategory name
  @Get('subcategory')
  async getCourseBySubcategory(
    @Query() query: ExpressQuery,
  ): Promise<Course[]> {
    return this.courseService.findBySubCategory(query);
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
  // @Get('author/:name')
  // async getByAuthor(
  //   @Param('name')
  //   name: string,
  // ): Promise<Course[]> {
  //   return this.getByAuthor(name);
  // }

  /*******************find course by author is not working yet************************/

  @Get()
  async getCoursesByAuthor(@Body() authorId: string): Promise<Course[]> {
    return this.courseService.findByAuthor(authorId);
  }

  //?' get instructor's and student's courses
  @Get()
  async getInstructorCourses(
    @Body() authorId: string,
    role: string,
  ): Promise<Course[]> {
    return this.courseService.findCoursesByAuthor(authorId, role);
  }

  //delete course
  @Delete(':id')
  @Roles(Role.Instructor)
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
    // const data = await this.authService.findUser(id);
    // console.log(req);
    return this.courseService.createCourse(course, req.user);
  }

  //Find Course and update
  @Put(':id')
  @Roles(Role.Instructor)
  async UpdateCourse(
    @Param('id')
    id: string,
    @Body()
    course: UpdateCourseDto,
  ): Promise<Course> {
    return this.courseService.UpdateById(id, course);
  }

  // @Post('saveforlater')
  // saveForLater(@Body() data: any): Promise<boolean> {
  //   console.log('controller savedCourse: ', data.id);
  //   return this.courseService.saveCourseForLater(data.id);
  // }
}
