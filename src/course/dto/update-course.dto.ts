import {
  IsEmpty,
  IsNumber,
  IsOptional,
  IsString,
  // IsBoolean,
} from 'class-validator';
import { User } from 'src/auth/schemas/user.schema';
// import { Category } from 'src/category/schemas/category.schema';
// import { Subcategory } from 'src/subcategory/schemas/subcategery.schema';

export class UpdateCourseDto {
  @IsOptional()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly subTitle: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsNumber()
  readonly price: number;

  @IsOptional()
  @IsString()
  readonly image: string;

  @IsOptional()
  readonly materials: [];

  @IsOptional()
  @IsString()
  readonly PopularTopicID: string;

  @IsEmpty({ message: 'you can not pass user id' })
  readonly author: User;

  // @IsOptional()
  // authorInfor: [];

  @IsOptional()
  category: string;

  // @IsOptional()
  // @IsBoolean()
  // isSaveForLater: boolean;

  // @IsOptional()
  // category: Category;

  @IsOptional()
  subcategory: string;

  // @IsOptional()
  // subcategory: Subcategory;

  @IsOptional()
  readonly language: string;

  @IsOptional()
  level: string;

  @IsOptional()
  @IsNumber()
  likes: number;

  @IsOptional()
  @IsNumber()
  dislikes: number;

  @IsOptional()
  @IsNumber()
  totalHours: number;

  @IsOptional()
  @IsNumber()
  lectures: number;

  @IsOptional()
  @IsNumber()
  participants: number;
}
