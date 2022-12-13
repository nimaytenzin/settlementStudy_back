import { PLOTSHAPE_REPOSITORY } from './../../core/constants/index';

import { PlotShape } from './entities/plot-shape.entity';

export const PlotsShapeProvider = [
  {
    provide: PLOTSHAPE_REPOSITORY,
    useValue: PlotShape,
  },
];
