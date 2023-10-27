import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';
import { Subcategory } from './schemas/subcategery.schema';
// import { Category } from 'src/category/schemas/category.schema';

@Controller('subcategory')
export class SubcategoryController {
  constructor(private subcategoryService: SubcategoryService) {}

  //*create subcategory
  // @Post(':categoryId/subcategories')
  // async createSubcategory(
  //   @Param('categoryId') categoryId: string,
  //   @Body() subcategory: Subcategory,
  // ): Promise<Subcategory> {
  //   subcategory.category = categoryId;
  //   return await this.subcategoryService.createSubcategory(subcategory);
  // }

  @Post()
  async createSubcategory(
    @Body() subCategory: Subcategory,
  ): Promise<Subcategory> {
    return await this.subcategoryService.createSubcategory(subCategory);
  }

  // get category by subcategory
  // @Get(':subcategoryId/category')
  // async getCategoryBySubcategory(
  //   @Param('subcategoryId') subcategoryId: string,
  // ): Promise<Category> {
  //   return await this.subcategoryService.getCategoryBySubcategory(
  //     subcategoryId,
  //   );
  // }

  @Get(':categoryId')
  async getSubCategoriesFromCategory(
    @Param('categoryId') categoryId: string,
  ): Promise<Subcategory[]> {
    return await this.subcategoryService.getSubCategoriesFromCategory(
      categoryId,
    );
  }
}
