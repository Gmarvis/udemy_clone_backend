import { Test, TestingModule } from '@nestjs/testing';
import { PurchasedCourseController } from './purchased-course.controller';

describe('PurchasedCourseController', () => {
  let controller: PurchasedCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchasedCourseController],
    }).compile();

    controller = module.get<PurchasedCourseController>(PurchasedCourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
