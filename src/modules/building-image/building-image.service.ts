import { BUILDINGIMAGE_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import { BuildingImage } from './entities/building-image.entity';

@Injectable()
export class BuildingImageService {
  constructor(
    @Inject(BUILDINGIMAGE_REPOSITORY)
    private readonly buildingImageRepository: typeof BuildingImage,
  ) {}

  async create(data: any) {
    return await this.buildingImageRepository.create(data);
  }

  findAll() {
    return `This action returns all buildingImage`;
  }

  async findAllByFeature(featureId: number) {
    return await this.buildingImageRepository.findAll({
      where: { buildingFeatureId: featureId },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} buildingImage`;
  }

  update(id: number, updateBuildingImageDto) {
    return `This action updates a #${id} buildingImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} buildingImage`;
  }
}
