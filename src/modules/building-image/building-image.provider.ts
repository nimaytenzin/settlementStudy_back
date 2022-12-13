import { BUILDINGIMAGE_REPOSITORY } from './../../core/constants/index';
import { BuildingImage } from './entities/building-image.entity';

export const BuildingImageProviders = [
  {
    provide: BUILDINGIMAGE_REPOSITORY,
    useValue: BuildingImage,
  },
];
