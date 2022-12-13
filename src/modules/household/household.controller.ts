import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HouseholdService } from './household.service';

@Controller('household')
export class HouseholdController {
  constructor(private readonly householdService: HouseholdService) {}

  @Post()
  create(@Body() createHouseholdDto) {
    return this.householdService.create(createHouseholdDto);
  }

  @Get()
  findAll() {
    return this.householdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.householdService.findOne(+id);
  }

  @Get('/unit/:unitId')
  findAllByUnit(@Param('unitId') unitId: string) {
    return this.householdService.findAllByUnit(+unitId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHouseholdDto) {
    return this.householdService.update(+id, updateHouseholdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.householdService.remove(+id);
  }
}
