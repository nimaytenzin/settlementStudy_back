import { DatabaseModule } from './core/database/database/database.module';
import { PlotModule } from './modules/plot/plot.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PlotImageModule } from './modules/plot-image/plot-image.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PlotShapeModule } from './modules/plot-shape/plot-shape.module';
import { BuildingShapeModule } from './modules/building-shape/building-shape.module';
import { BuildingModule } from './modules/building/building.module';
import { BuildingImageModule } from './modules/building-image/building-image.module';
import { UnitModule } from './modules/unit/unit.module';
import { HouseholdModule } from './modules/household/household.module';
import { MemberModule } from './modules/member/member.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'images'),
    }),
    DatabaseModule,
    PlotModule,
    PlotImageModule,
    PlotShapeModule,
    BuildingShapeModule,
    BuildingModule,
    BuildingImageModule,
    UnitModule,
    HouseholdModule,
    MemberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
