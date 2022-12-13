import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlotShapeService } from './plot-shape.service';
import { CreatePlotShapeDto } from './dto/create-plot-shape.dto';
import { UpdatePlotShapeDto } from './dto/update-plot-shape.dto';

@Controller('plot-shape')
export class PlotShapeController {
  constructor(private readonly plotShapeService: PlotShapeService) {}

  @Post()
  create(@Body() createPlotShapeDto: CreatePlotShapeDto) {
    return this.plotShapeService.create(createPlotShapeDto);
  }

  @Get()
  findAll() {
    return this.plotShapeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plotShapeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlotShapeDto: UpdatePlotShapeDto,
  ) {
    return this.plotShapeService.update(+id, updatePlotShapeDto);
  }

  @Patch('set-done/:plotFeatureId')
  markCompleted(@Param('plotFeatureId') plotFeatureId: string) {
    return this.plotShapeService.markCompleted(+plotFeatureId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plotShapeService.remove(+id);
  }
}
