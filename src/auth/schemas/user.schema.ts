import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop()
  name: string;

  @Prop({ unique: [true, 'Email already exist'] })
  email: string;

  @Prop()
  lastname: string;

  @Prop()
  avatar: string;

  @Prop()
  headline: string;

  @Prop()
  biography: string;

  @Prop()
  website: string;

  @Prop()
  facebook: string;

  @Prop()
  linkedin: string;

  @Prop()
  youtube: string;

  @Prop()
  @Exclude()
  password: string;

  @Prop({ default: 'student' })
  roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
