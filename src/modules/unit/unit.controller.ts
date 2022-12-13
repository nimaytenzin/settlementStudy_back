import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UnitService } from './unit.service';
import { UpdateUnitDto } from './dto/update-unit.dto';

@Controller('unit')
export class UnitController {
  constructor(private readonly unitService: UnitService) {}

  @Post()
  create(@Body() data) {
    return this.unitService.create(data);
  }

  @Get()
  findAll() {
    return this.unitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unitService.findOne(+id);
  }

  @Get('/building/:buildingFeatureId')
  findAllByBuilding(@Param('buildingFeatureId') buildingFeatureId: string) {
    return this.unitService.findAllByBuilding(+buildingFeatureId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUnitDto) {
    return this.unitService.update(+id, updateUnitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unitService.remove(+id);
  }
}
