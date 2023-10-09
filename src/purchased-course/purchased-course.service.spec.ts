import { Test, TestingModule } from '@nestjs/testing';
import { PurchasedCourseService } from './purchased-course.service';

describe('PurchasedCourseService', () => {
  let service: PurchasedCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchasedCourseService],
    }).compile();

    service = module.get<PurchasedCourseService>(PurchasedCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
