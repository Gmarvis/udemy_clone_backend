import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { UserModule } from './user/user.module';
import { PurchasedCourseModule } from './purchased-course/purchased-course.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    CourseModule,
    UserModule,
    PurchasedCourseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
