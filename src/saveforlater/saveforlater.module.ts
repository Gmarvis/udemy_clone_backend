import { Module } from '@nestjs/common';
import { SaveforlaterController } from './saveforlater.controller';
import { SaveforlaterService } from './saveforlater.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SaveForLaterSchema } from './schema/saveforlater.schema';
import { CourseModule } from 'src/course/course.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'SaveForLater', schema: SaveForLaterSchema },
    ]),
    CourseModule,
  ],
  controllers: [SaveforlaterController],
  providers: [SaveforlaterService],
})
export class SaveforlaterModule {}
