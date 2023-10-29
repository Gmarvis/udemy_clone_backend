import { Test, TestingModule } from '@nestjs/testing';
import { SaveforlaterController } from './saveforlater.controller';

describe('SaveforlaterController', () => {
  let controller: SaveforlaterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaveforlaterController],
    }).compile();

    controller = module.get<SaveforlaterController>(SaveforlaterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
