import { Test, TestingModule } from '@nestjs/testing';
import { PlotImageController } from './plot-image.controller';
import { PlotImageService } from './plot-image.service';

describe('PlotImageController', () => {
  let controller: PlotImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlotImageController],
      providers: [PlotImageService],
    }).compile();

    controller = module.get<PlotImageController>(PlotImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
