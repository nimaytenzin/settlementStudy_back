import { Module } from '@nestjs/common';
import { PlotImageService } from './plot-image.service';
import { PlotImageController } from './plot-image.controller';
import { PlotsImageProvider } from './plot-image.providers';

@Module({
  controllers: [PlotImageController],
  providers: [PlotImageService, ...PlotsImageProvider],
})
export class PlotImageModule {}
