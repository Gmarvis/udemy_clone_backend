import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Subcategory } from './schemas/subcategery.schema';
import { Category } from 'src/category/schemas/category.schema';

@Injectable()
export class SubcategoryService {
  constructor(
    @InjectModel(Subcategory.name)
    private subcategoryModel: mongoose.Model<Subcategory>,
  ) {}

  // create subcategory
  async createSubcategory(subcategory: Subcategory): Promise<Subcategory> {
    return await this.subcategoryModel.create(subcategory);
  }

  // get categories by subcategories
  async getCategoryBySubcategory(subcategoryId: string): Promise<Category> {
    return await this.subcategoryModel
      .findById(subcategoryId)
      .populate('category');
  }
}
