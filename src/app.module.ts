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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
