import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
// import { Transform } from 'class-transformer';
import mongoose, { ObjectId } from 'mongoose';
import { Subcategory } from 'src/subcategory/schemas/subcategery.schema';

@Schema()
export class Category {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop()
  name: string;

  @Prop()
  image: string;

  // * not necessary
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Subcategory' })
  subcategories: Subcategory[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
CategorySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash;
  },
});
