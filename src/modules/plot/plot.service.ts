import { Plot } from './entities/plot.entity';
import { PLOTS_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class PlotService {
  constructor(
    @Inject(PLOTS_REPOSITORY)
    private readonly plotsRepository: typeof Plot,
  ) {}

  async create(createPlotDto) {
    return await this.plotsRepository.create(createPlotDto);
  }

  findAll() {
    return `This action returns all plot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plot`;
  }
  async findOneByPlotId(plotId: number) {
    return await this.plotsRepository.findOne({
      where: {
        plotFeatureId: plotId,
      },
    });
  }

  async update(plotFeatuerId: number, data) {
    await this.plotsRepository.update(
      { ...data },
      {
        where: { plotFeatureId: plotFeatuerId },
        returning: true,
      },
    );
    return await this.plotsRepository.findOne({
      where: { plotFeatureId: plotFeatuerId },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} plot`;
  }
}
