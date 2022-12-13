import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlotDTO } from './dto/plot.dto';
import { PlotService } from './plot.service';

@Controller('plot')
export class PlotController {
  constructor(private readonly plotService: PlotService) {}

  @Post()
  create(@Body() createPlotDto: PlotDTO) {
    return this.plotService.create(createPlotDto);
  }

  @Get()
  findAll() {
    return this.plotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plotService.findOne(+id);
  }

  @Get('/plotId/:plotId')
  findOneByPlotId(@Param('plotId') plotId: number) {
    return this.plotService.findOneByPlotId(+plotId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlotDto: PlotDTO) {
    return this.plotService.update(+id, updatePlotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plotService.remove(+id);
  }
}
