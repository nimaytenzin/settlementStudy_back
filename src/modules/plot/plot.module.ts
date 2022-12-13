import { Module } from '@nestjs/common';
import { PlotService } from './plot.service';
import { PlotController } from './plot.controller';
import { PlotsProvider } from './plot.providers';

@Module({
  controllers: [PlotController],
  providers: [PlotService, ...PlotsProvider],
})
export class PlotModule {}
