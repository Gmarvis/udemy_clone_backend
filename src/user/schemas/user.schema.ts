import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  @Exclude()
  password: string;

  @Prop()
  bio: string;

  @Prop({ default: 'student' })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
