import { PLOTSIMAGE_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import { PlotImage } from './entities/plot-image.entity';

@Injectable()
export class PlotImageService {
  constructor(
    @Inject(PLOTSIMAGE_REPOSITORY)
    private readonly plotsImageRepository: typeof PlotImage,
  ) {}

  async create(createPlotImageDto) {
    return await this.plotsImageRepository.create(createPlotImageDto);
  }

  findAll() {
    return `This action returns all plotImage`;
  }

  async findAllByPlot(plotFeatuerId: number) {
    return await this.plotsImageRepository.findAll({
      where: { plotFeatureId: plotFeatuerId },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} plotImage`;
  }

  update(id: number, updatePlotImageDto) {
    return `This action updates a #${id} plotImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} plotImage`;
  }
}
