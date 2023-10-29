import { Module, Global } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseSchema } from './schemas/course.schema';
import { AuthModule } from 'src/auth/auth.module';

@Global()
@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Course', schema: CourseSchema }]),
  ],
  controllers: [CourseController],
  providers: [CourseService],
  exports: [CourseService],
})
export class CourseModule {}
