import { Test, TestingModule } from '@nestjs/testing';
import { BuildingImageService } from './building-image.service';

describe('BuildingImageService', () => {
  let service: BuildingImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuildingImageService],
    }).compile();

    service = module.get<BuildingImageService>(BuildingImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
