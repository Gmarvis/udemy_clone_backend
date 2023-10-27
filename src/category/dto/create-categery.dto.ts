import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Subcategory } from 'src/subcategory/schemas/subcategery.schema';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsString()
  readonly image: string;

  //* bad field
  @IsArray()
  subcategories: Subcategory[];
}
