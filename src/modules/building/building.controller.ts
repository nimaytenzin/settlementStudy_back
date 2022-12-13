import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BuildingService } from './building.service';
import { UpdateBuildingDto } from './dto/update-building.dto';

@Controller('building')
export class BuildingController {
  constructor(private readonly buildingService: BuildingService) {}

  @Post()
  create(@Body() createBuildingDto) {
    return this.buildingService.create(createBuildingDto);
  }

  @Get()
  findAll() {
    return this.buildingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingService.findOne(+id);
  }

  @Get('/fid/:buildingFeatureId')
  findOneByBuildingFeatuerId(@Param('buildingFeatureId') featureId: string) {
    return this.buildingService.findOneByFid(+featureId);
  }

  @Patch('/fid/:buildingFeatureId')
  updateByBuildingFeatureId(
    @Param('buildingFeatureId') featuerId: string,
    @Body() data,
  ) {
    return this.buildingService.updateByFeature(+featuerId, data);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBuildingDto: UpdateBuildingDto,
  ) {
    return this.buildingService.update(+id, updateBuildingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildingService.remove(+id);
  }
}
