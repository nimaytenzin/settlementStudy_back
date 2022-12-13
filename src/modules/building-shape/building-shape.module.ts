import { Module } from '@nestjs/common';
import { BuildingShapeService } from './building-shape.service';
import { BuildingShapeController } from './building-shape.controller';
import { BuildingsShapeProviders } from './building-shape.provider';

@Module({
  controllers: [BuildingShapeController],
  providers: [BuildingShapeService, ...BuildingsShapeProviders],
})
export class BuildingShapeModule {}
