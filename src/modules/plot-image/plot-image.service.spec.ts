import { Test, TestingModule } from '@nestjs/testing';
import { PlotImageService } from './plot-image.service';

describe('PlotImageService', () => {
  let service: PlotImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlotImageService],
    }).compile();

    service = module.get<PlotImageService>(PlotImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
