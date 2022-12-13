import { Inject, Injectable } from '@nestjs/common';
import { BUILDINGSHAPE_REPOSITORY } from 'src/core/constants';
import { BuildingShape } from './entities/building-shape.entity';

@Injectable()
export class BuildingShapeService {
  constructor(
    @Inject(BUILDINGSHAPE_REPOSITORY)
    private readonly buildingShapeRepository: typeof BuildingShape,
  ) {}

  create(createBuildingShapeDto: any) {
    console.log(createBuildingShapeDto);
    return 'This action adds a new buildingShape';
  }

  async findAll() {
    const data: any = await this.buildingShapeRepository.sequelize.query(
      `SELECT jsonb_build_object(
        'type',     'FeatureCollection',
        'features', jsonb_agg(features.feature)
    )
    FROM (
      SELECT jsonb_build_object(
        'type',       'Feature',
        'geometry',   ST_AsGeoJSON(geom)::jsonb,
        'properties', to_jsonb(inputs)  - 'geom'
      ) AS feature  
      FROM (SELECT * FROM "BuildingShapes") inputs) features;`,
    );
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} buildingShape`;
  }

  async markCompleted(buildingFeatureId: number) {
    return await this.buildingShapeRepository.update(
      { isCompleted: 'true' },
      { where: { buildingFeatureId: buildingFeatureId } },
    );
  }

  update(id: number, updateBuildingShapeDto: any) {
    console.log(updateBuildingShapeDto);
    return `This action updates a #${id} buildingShape`;
  }

  remove(id: number) {
    return `This action removes a #${id} buildingShape`;
  }
}
