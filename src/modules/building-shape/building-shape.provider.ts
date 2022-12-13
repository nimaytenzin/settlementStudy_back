import { BUILDINGSHAPE_REPOSITORY } from './../../core/constants/index';
import { BuildingShape } from './entities/building-shape.entity';
export const BuildingsShapeProviders = [
  {
    provide: BUILDINGSHAPE_REPOSITORY,
    useValue: BuildingShape,
  },
];
