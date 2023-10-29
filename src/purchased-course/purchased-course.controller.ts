import { Body, Controller, Post, Get, Param, Delete } from '@nestjs/common';
import { PurchasedCourseService } from './purchased-course.service';
import { Course } from 'src/course/schemas/course.schema';
import { PurchasedCourse } from './schemas/purchaseed-course.schema';

@Controller('purchasedcourse')
export class PurchasedCourseController {
  constructor(
    private readonly purshasedCourseService: PurchasedCourseService,
  ) {}

  @Post()
  purshaseCourse(@Body() data: any): Promise<any> {
    return this.purshasedCourseService.purshaseCourses(
      data.courseIds,
      data.userId,
    );
  }

  @Get(':id')
  // getPaidCourses(@Body() data: any): Promise<any> {
  getPaidCourses(@Param('id') id: string): Promise<Course[]> {
    console.log('hit paid course controller id', id);
    return this.purshasedCourseService.getAllCoursesPaidByAUser(id);
  }

  @Delete()
  removePurshasedCourse(
    @Body() data: { courseId: string; userId: string },
  ): Promise<PurchasedCourse> {
    console.log('hit saveforlater endpoind');
    return this.purshasedCourseService.removePurshasedCourse(
      data.courseId,
      data.userId,
    );
  }
}
