import { BuildingImageProviders } from './building-image.provider';
import { Module } from '@nestjs/common';
import { BuildingImageService } from './building-image.service';
import { BuildingImageController } from './building-image.controller';

@Module({
  controllers: [BuildingImageController],
  providers: [BuildingImageService, ...BuildingImageProviders],
})
export class BuildingImageModule {}
