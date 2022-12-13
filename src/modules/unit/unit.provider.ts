import { UNIT_REPOSITORY } from 'src/core/constants';
import { Unit } from './entities/unit.entity';

export const UnitProviders = [
  {
    provide: UNIT_REPOSITORY,
    useValue: Unit,
  },
];
