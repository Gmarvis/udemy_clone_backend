import { IsNotEmpty } from 'class-validator';

export class PurshasedCourses {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  courseIds: string[];
}
