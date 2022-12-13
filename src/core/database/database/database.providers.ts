import { Member } from './../../../modules/member/entities/member.entity';
import { Household } from './../../../modules/household/entities/household.entity';
import { Unit } from './../../../modules/unit/entities/unit.entity';
import { BuildingImage } from './../../../modules/building-image/entities/building-image.entity';
import { Building } from './../../../modules/building/entities/building.entity';
import { BuildingShape } from './../../../modules/building-shape/entities/building-shape.entity';
import { PlotImage } from './../../../modules/plot-image/entities/plot-image.entity';
import { databaseConfig } from './database.config';
import {
  SEQUELIZE,
  DEVELOPMENT,
  TEST,
  PRODUCTION,
} from './../../constants/index';
import { Sequelize } from 'sequelize-typescript';
import { Plot } from 'src/modules/plot/entities/plot.entity';
import { PlotShape } from 'src/modules/plot-shape/entities/plot-shape.entity';
export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([
        Plot,
        PlotImage,
        PlotShape,
        BuildingShape,
        Building,
        BuildingImage,
        Unit,
        Household,
        Member,
      ]);

      await sequelize.sync();
      return sequelize;
    },
  },
];
