import { Module } from '@nestjs/common';
import { UnitService } from './unit.service';
import { UnitController } from './unit.controller';
import { UnitProviders } from './unit.provider';

@Module({
  controllers: [UnitController],
  providers: [UnitService, ...UnitProviders],
})
export class UnitModule {}
