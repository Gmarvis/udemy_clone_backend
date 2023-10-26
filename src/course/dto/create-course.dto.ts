import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/auth/schemas/user.schema';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly decription: string;

  @IsNotEmpty()
  @IsString()
  readonly price: string;

  @IsNotEmpty()
  @IsString()
  readonly image: string;

  @IsNotEmpty()
  readonly materials: [];

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  subcategory: string;

  readonly PopularTopicID: string;

  @IsEmpty({ message: 'you can not pass user id' })
  readonly author: User;

  @IsEmpty()
  authorInfor: [];

  likes: number;

  dislikes: number;
}
