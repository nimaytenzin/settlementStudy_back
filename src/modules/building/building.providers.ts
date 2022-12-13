import { BUILDING_REPOSITORY } from './../../core/constants/index';
import { Building } from './entities/building.entity';
export const BuildingProvider = [
  {
    provide: BUILDING_REPOSITORY,
    useValue: Building,
  },
];
