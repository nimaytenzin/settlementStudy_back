import { HOUSEHOLD_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import { UpdateHouseholdDto } from './dto/update-household.dto';
import { Household } from './entities/household.entity';

@Injectable()
export class HouseholdService {
  constructor(
    @Inject(HOUSEHOLD_REPOSITORY)
    private readonly householdsRepository: typeof Household,
  ) {}

  async create(createHouseholdDto) {
    return await this.householdsRepository.create(createHouseholdDto);
  }

  findAll() {
    return `This action returns all household`;
  }
  async findAllByUnit(unitId: number) {
    return await this.householdsRepository.findAll({
      where: { unitId: unitId },
    });
  }

  async findOne(id: number) {
    return await this.householdsRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, data) {
    await this.householdsRepository.update(
      { ...data },
      {
        where: { id },
        returning: true,
      },
    );
    return await this.householdsRepository.findOne({
      where: { id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} household`;
  }
}
