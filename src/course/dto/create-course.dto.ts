import {
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
  // IsBoolean,
} from 'class-validator';
import { User } from 'src/auth/schemas/user.schema';
// import { Category } from 'src/category/schemas/category.schema';
// import { Subcategory } from 'src/subcategory/schemas/subcategery.schema';

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
  // category: Category;
  category: string;

  // @IsBoolean()
  // isSaveForLater: boolean;

  @IsNotEmpty()
  // subcategory: Subcategory;
  subcategory: string;

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

  totalHours: number;

  lectures: number;

  participants: number;
}
