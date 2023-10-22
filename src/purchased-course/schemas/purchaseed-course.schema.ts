import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';
import { Course } from 'src/course/schemas/course.schema';

@Schema({
  timestamps: true,
})
export class PurchasedCourse {
  @Prop({ type: mongoose.Schema.Types.String })
  userId: User;

  @Prop({ type: mongoose.Schema.Types.String })
  purchasedCourse: Course;
}

export const PurchasedCourseSchema =
  SchemaFactory.createForClass(PurchasedCourse);
