import { PLOTS_REPOSITORY } from './../../core/constants/index';
import { Plot } from './entities/plot.entity';

export const PlotsProvider = [
  {
    provide: PLOTS_REPOSITORY,
    useValue: Plot,
  },
];
