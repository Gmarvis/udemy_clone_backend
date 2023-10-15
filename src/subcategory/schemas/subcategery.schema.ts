import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Type } from 'class-transformer';
import mongoose from 'mongoose';
// import { Category } from 'src/category/schemas/category.schema';

@Schema()
export class Subcategory {
  @Prop()
  name: string;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Category.name })
  // @Type(() => Category)
  // category: Category;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  category: string;
}

export const SubcategorySchema = SchemaFactory.createForClass(Subcategory);
