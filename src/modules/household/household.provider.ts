import { HOUSEHOLD_REPOSITORY } from './../../core/constants/index';
import { Household } from './entities/household.entity';

export const HouseholdProviders = [
  {
    provide: HOUSEHOLD_REPOSITORY,
    useValue: Household,
  },
];
