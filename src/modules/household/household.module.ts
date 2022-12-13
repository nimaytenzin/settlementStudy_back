import { Module } from '@nestjs/common';
import { HouseholdService } from './household.service';
import { HouseholdController } from './household.controller';
import { HouseholdProviders } from './household.provider';

@Module({
  controllers: [HouseholdController],
  providers: [HouseholdService, ...HouseholdProviders],
})
export class HouseholdModule {}
