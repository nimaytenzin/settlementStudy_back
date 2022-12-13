import { Test, TestingModule } from '@nestjs/testing';
import { BuildingShapeController } from './building-shape.controller';
import { BuildingShapeService } from './building-shape.service';

describe('BuildingShapeController', () => {
  let controller: BuildingShapeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuildingShapeController],
      providers: [BuildingShapeService],
    }).compile();

    controller = module.get<BuildingShapeController>(BuildingShapeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
