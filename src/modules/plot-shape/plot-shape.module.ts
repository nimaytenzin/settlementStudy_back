import { Module } from '@nestjs/common';
import { PlotShapeService } from './plot-shape.service';
import { PlotShapeController } from './plot-shape.controller';
import { PlotsShapeProvider } from './plot-shape.provider';

@Module({
  controllers: [PlotShapeController],
  providers: [PlotShapeService, ...PlotsShapeProvider],
})
export class PlotShapeModule {}
