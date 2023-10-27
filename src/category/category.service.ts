import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './schemas/category.schema';
import * as mongoose from 'mongoose';
import { Subcategory } from 'src/subcategory/schemas/subcategery.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: mongoose.Model<Category>,
  ) {}

  // create categery
  async createCategory(category: Category): Promise<Category> {
    // const data = category;
    // console.log('this is data: ', data);

    return await this.categoryModel.create(category);
  }

  // get subcategories by Categories
  async getSubcategoriesByCategory(categoryId: string): Promise<Subcategory[]> {
    const categories = await this.categoryModel
      .findById(categoryId)
      .populate('subcategories')
      .exec();

    return categories.subcategories;
  }

  // find all Categories
  async findAll(): Promise<Category[]> {
    const categories = await this.categoryModel.find();
    return categories;
  }
}
