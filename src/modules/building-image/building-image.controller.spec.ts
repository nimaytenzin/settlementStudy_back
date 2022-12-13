import { Test, TestingModule } from '@nestjs/testing';
import { BuildingImageController } from './building-image.controller';
import { BuildingImageService } from './building-image.service';

describe('BuildingImageController', () => {
  let controller: BuildingImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuildingImageController],
      providers: [BuildingImageService],
    }).compile();

    controller = module.get<BuildingImageController>(BuildingImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
