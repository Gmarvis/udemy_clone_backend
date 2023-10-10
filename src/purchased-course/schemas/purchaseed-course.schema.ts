import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class PurchasedCourse {
  @Prop()
  userId: string;

  @Prop()
  courseId: string;
}

export const PurchasedCourseSchema =
  SchemaFactory.createForClass(PurchasedCourse);
