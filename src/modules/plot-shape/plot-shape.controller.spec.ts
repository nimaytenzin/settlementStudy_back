import { Test, TestingModule } from '@nestjs/testing';
import { PlotShapeController } from './plot-shape.controller';
import { PlotShapeService } from './plot-shape.service';

describe('PlotShapeController', () => {
  let controller: PlotShapeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlotShapeController],
      providers: [PlotShapeService],
    }).compile();

    controller = module.get<PlotShapeController>(PlotShapeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
