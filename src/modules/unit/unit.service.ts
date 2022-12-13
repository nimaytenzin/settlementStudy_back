import { UNIT_REPOSITORY } from 'src/core/constants';
import { Inject, Injectable } from '@nestjs/common';
import { Unit } from './entities/unit.entity';

@Injectable()
export class UnitService {
  constructor(
    @Inject(UNIT_REPOSITORY)
    private readonly unitsRepository: typeof Unit,
  ) {}

  async create(createUnitDto) {
    return await this.unitsRepository.create(createUnitDto);
  }

  findAll() {
    return `This action returns all unit`;
  }

  async findAllByBuilding(buildingFeatureId: number) {
    return await this.unitsRepository.findAll({
      where: { buildingFeatureId: buildingFeatureId },
      order: ['id'],
    });
  }

  async findOne(id: number) {
    return await this.unitsRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, data) {
    await this.unitsRepository.update(
      { ...data },
      {
        where: { id },
        returning: true,
      },
    );
    return await this.unitsRepository.findOne({
      where: { id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} unit`;
  }
}
