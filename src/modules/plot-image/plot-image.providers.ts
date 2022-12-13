import { PlotImage } from './entities/plot-image.entity';
import { PLOTSIMAGE_REPOSITORY } from './../../core/constants/index';

export const PlotsImageProvider = [
  {
    provide: PLOTSIMAGE_REPOSITORY,
    useValue: PlotImage,
  },
];
