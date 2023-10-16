import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';
// import { User } from 'src/user/schemas/user.schema';
// import { HydratedDocument } from 'mongoose';

// export type CatDocument = HydratedDocument<Cat>;

@Schema({
  timestamps: true,
})
export class Course {
  @Prop()
  title: string;

  @Prop()
  decription: string;

  @Prop()
  price: number;

  @Prop()
  image: string;

  @Prop()
  materials: [];

  @Prop()
  category: string;

  @Prop()
  subcategory: string;

  @Prop()
  PopularTopicID: string;

  @Prop({ default: 0 })
  likes: number;

  @Prop({ default: 0 })
  dislikes: number;

  @Prop({ type: mongoose.Schema.Types.String })
  author: User;

  @Prop()
  authorInfor: [];
}

export const CourseSchema = SchemaFactory.createForClass(Course);
