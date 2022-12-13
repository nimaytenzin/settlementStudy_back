import { Test, TestingModule } from '@nestjs/testing';
import { BuildingShapeService } from './building-shape.service';

describe('BuildingShapeService', () => {
  let service: BuildingShapeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuildingShapeService],
    }).compile();

    service = module.get<BuildingShapeService>(BuildingShapeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
