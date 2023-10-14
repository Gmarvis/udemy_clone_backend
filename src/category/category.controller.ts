import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './schemas/category.schema';
import { Subcategory } from 'src/subcategory/schemas/subcategery.schema';
// import { CreateCategoryDto } from './dto/create-categery.dto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  // get all categories
  @Get()
  async getAllCategories(): Promise<Category[]> {
    return await this.categoryService.findAll();
  }

  // Create category
  @Post()
  async createCategory(
    @Body()
    category: Category,
  ): Promise<Category> {
    return await this.categoryService.createCategory(category);
  }

  // get subcategories by category id
  @Get(':categoryId/subcategories')
  async getSubcategoriesByCategory(
    @Param('categoryId') categoryId: string,
  ): Promise<Subcategory[]> {
    return await this.categoryService.getSubcategoriesByCategory(categoryId);
  }
}
