import { Inject, Injectable } from '@nestjs/common';
import { PLOTSHAPE_REPOSITORY } from 'src/core/constants';
import { CreatePlotShapeDto } from './dto/create-plot-shape.dto';
import { PlotShape } from './entities/plot-shape.entity';

@Injectable()
export class PlotShapeService {
  constructor(
    @Inject(PLOTSHAPE_REPOSITORY)
    private readonly plotsShapeRepository: typeof PlotShape,
  ) {}

  create(createPlotShapeDto: CreatePlotShapeDto) {
    console.log(createPlotShapeDto);
    return 'This action adds a new plotShape';
  }

  async findAll() {
    const data: any = await this.plotsShapeRepository.sequelize.query(
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
      FROM (SELECT * FROM "PlotShapes") inputs) features;`,
    );
    return data;
    // return await this.plotsShapeRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} plotShape`;
  }

  update(id: number, updatePlotShapeDto) {
    return `This action updates a #${id} plotShape, ${updatePlotShapeDto}`;
  }

  async markCompleted(id: number) {
    return await this.plotsShapeRepository.update(
      { isCompleted: 'true' },
      { where: { plotFeatureId: id } },
    );
  }

  remove(id: number) {
    return `This action removes a #${id} plotShape`;
  }
}
