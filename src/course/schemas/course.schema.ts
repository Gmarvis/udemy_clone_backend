import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
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
  video: [];

  @Prop()
  PopularTopicID: string;

  @Prop()
  author: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
