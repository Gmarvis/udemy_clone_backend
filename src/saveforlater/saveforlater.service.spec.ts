import { Test, TestingModule } from '@nestjs/testing';
import { SaveforlaterService } from './saveforlater.service';

describe('SaveforlaterService', () => {
  let service: SaveforlaterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaveforlaterService],
    }).compile();

    service = module.get<SaveforlaterService>(SaveforlaterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
