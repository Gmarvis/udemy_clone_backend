import { IsEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { User } from 'src/auth/schemas/user.schema';

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

  @IsOptional()
  authorInfor: [];

  @IsOptional()
  category: string;

  @IsOptional()
  subcategory: string;

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
}
