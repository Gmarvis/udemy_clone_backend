import { Module } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';
import { SubcategoryController } from './subcategory.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SubcategorySchema } from './schemas/subcategery.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Subcategory', schema: SubcategorySchema },
    ]),
  ],
  providers: [SubcategoryService],
  controllers: [SubcategoryController],
})
export class SubcategoryModule {}
