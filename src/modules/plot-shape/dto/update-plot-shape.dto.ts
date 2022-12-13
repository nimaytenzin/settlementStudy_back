import { PartialType } from '@nestjs/mapped-types';
import { CreatePlotShapeDto } from './create-plot-shape.dto';

export class UpdatePlotShapeDto extends PartialType(CreatePlotShapeDto) {}
