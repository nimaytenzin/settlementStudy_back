import { Test, TestingModule } from '@nestjs/testing';
import { PlotShapeService } from './plot-shape.service';

describe('PlotShapeService', () => {
  let service: PlotShapeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlotShapeService],
    }).compile();

    service = module.get<PlotShapeService>(PlotShapeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
