import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: ' please enter correct email' })
  email: string;

  @Exclude()
  password: string;

  @IsOptional()
  @IsString()
  readonly lastname: string;

  @IsOptional()
  @IsString()
  readonly avatar: string;

  @IsOptional()
  @IsString()
  readonly headline: string;

  @IsOptional()
  @IsString()
  readonly biography: string;

  @IsOptional()
  @IsString()
  readonly website: string;

  @IsOptional()
  @IsString()
  readonly facebook: string;

  @IsOptional()
  @IsString()
  readonly linkedin: string;

  //   @IsOptional()
  //   @IsString()
  //   readonly yotube: string;
}
