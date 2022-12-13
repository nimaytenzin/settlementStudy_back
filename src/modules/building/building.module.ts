import { Module } from '@nestjs/common';
import { BuildingService } from './building.service';
import { BuildingController } from './building.controller';
import { BuildingProvider } from './building.providers';

@Module({
  controllers: [BuildingController],
  providers: [BuildingService, ...BuildingProvider],
})
export class BuildingModule {}
