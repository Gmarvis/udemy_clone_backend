import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { SaveforlaterService } from './saveforlater.service';
import { SaveForLater } from './schema/saveforlater.schema';
import { Course } from 'src/course/schemas/course.schema';

@Controller('saveforlater')
export class SaveforlaterController {
  constructor(private readonly saveforlaterService: SaveforlaterService) {}

  @Post()
  saveforlater(
    @Body() data: { courseId: string; userId: string },
  ): Promise<Course> {
    console.log('hit saveforlater endpoind');
    return this.saveforlaterService.saveCourseForLater(
      data.courseId,
      data.userId,
    );
  }

  @Get(':id')
  getSaveForLater(@Param('id') id: string): Promise<Course[]> {
    console.log('hit getSAvedforlater endpoind');
    return this.saveforlaterService.getSavedCourse(id);
  }

  @Delete()
  removeSavedCourse(
    @Body() data: { courseId: string; userId: string },
  ): Promise<SaveForLater> {
    console.log('hit saveforlater endpoind');
    return this.saveforlaterService.removeSavedCourse(
      data.courseId,
      data.userId,
    );
  }
}
