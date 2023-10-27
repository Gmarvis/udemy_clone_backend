import { IsOptional, IsString } from 'class-validator';

export class UpdateProfileDto {
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

  @IsOptional()
  @IsString()
  readonly yotube: string;

  @IsOptional()
  @IsString()
  readonly roles: [string];
}
