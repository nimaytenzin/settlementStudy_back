import { BUILDING_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { Building } from './entities/building.entity';

@Injectable()
export class BuildingService {
  constructor(
    @Inject(BUILDING_REPOSITORY)
    private readonly buildingRepository: typeof Building,
  ) {}

  async create(data) {
    return await this.buildingRepository.create(data);
  }

  findAll() {
    return `This action returns all building`;
  }

  findOne(id: number) {
    return `This action returns a #${id} building`;
  }
  async findOneByFid(buildingFeatureId: number) {
    return await this.buildingRepository.findOne({
      where: { buildingFeatureId: buildingFeatureId },
    });
  }

  update(id: number, updateBuildingDto: any) {
    return `This action updates a #${id} building`;
  }

  async updateByFeature(buildingFeatureId: number, data) {
    await this.buildingRepository.update(
      { ...data },
      {
        where: { buildingFeatureId: buildingFeatureId },
        returning: true,
      },
    );
    return await this.buildingRepository.findOne({
      where: { buildingFeatureId: buildingFeatureId },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} building`;
  }
}
