import { IsEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { User } from 'src/auth/schemas/user.schema';

export class UpdateCourseDto {
  @IsOptional()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly decription: string;

  @IsOptional()
  @IsString()
  readonly price: string;

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
  @IsNumber()
  likes: number;

  @IsOptional()
  @IsNumber()
  dislikes: number;
}
