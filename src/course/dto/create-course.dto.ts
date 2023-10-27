import { IsEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { User } from 'src/auth/schemas/user.schema';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  subTitle: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsString()
  readonly image: string;

  @IsNotEmpty()
  readonly materials: [];

  @IsNotEmpty()
  readonly category: string;

  @IsNotEmpty()
  readonly subcategory: string;

  @IsNotEmpty()
  readonly language: string;

  @IsNotEmpty()
  level: string;

  readonly PopularTopicID: string;
  @IsEmpty({ message: 'you can not pass user id' })
  readonly author: User;

  @IsEmpty()
  authorInfor: [];

  likes: number;

  dislikes: number;
}
