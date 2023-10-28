import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';
import { Category } from 'src/category/schemas/category.schema';
import { Subcategory } from 'src/subcategory/schemas/subcategery.schema';
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
  subTitle: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  image: string;

  @Prop()
  materials: [];

  @Prop({ default: false })
  isSaveForLater: boolean;
  // @Prop()
  // category: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  category: Category;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' })
  subcategory: Subcategory;

  @Prop()
  language: string;

  @Prop()
  level: string;

  @Prop({ default: 0 })
  likes: number;

  @Prop({ default: 0 })
  dislikes: number;

  @Prop({ type: mongoose.Schema.Types.String, ref: 'User' })
  author: User;

  @Prop({ default: 0 })
  totalHours: number;

  @Prop({ default: 0 })
  lectures: number;

  @Prop({ default: 0 })
  participants: number;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
CourseSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash;
  },
});
