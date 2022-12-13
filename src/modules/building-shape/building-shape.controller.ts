import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BuildingShapeService } from './building-shape.service';

@Controller('building-shape')
export class BuildingShapeController {
  constructor(private readonly buildingShapeService: BuildingShapeService) {}

  @Post()
  create(@Body() createBuildingShapeDto: any) {
    return this.buildingShapeService.create(createBuildingShapeDto);
  }

  @Get()
  findAll() {
    return this.buildingShapeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingShapeService.findOne(+id);
  }

  @Patch('set-done/:buildingFeatureId')
  markCompleted(@Param('buildingFeatureId') buildingFeatureId: string) {
    return this.buildingShapeService.markCompleted(+buildingFeatureId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuildingShapeDto: any) {
    return this.buildingShapeService.update(+id, updateBuildingShapeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildingShapeService.remove(+id);
  }
}
