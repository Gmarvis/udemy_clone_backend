import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';
import { Course } from 'src/course/schemas/course.schema';
import { SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class SaveForLater {
  @Prop({ type: mongoose.Schema.Types.String })
  user: User;

  @Prop({ type: mongoose.Schema.Types.String })
  course: Course;
}

export const SaveForLaterSchema = SchemaFactory.createForClass(SaveForLater);
