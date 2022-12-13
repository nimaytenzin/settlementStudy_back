import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Helper } from 'src/utils/file-uploading.utils';
import { PlotDTO } from '../plot/dto/plot.dto';
import { PlotImageService } from './plot-image.service';
import { diskStorage } from 'multer';

@Controller('plot-image')
export class PlotImageController {
  constructor(private readonly plotImageService: PlotImageService) {}

  @Post(':id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: Helper.plotImagesFolder,
        filename: Helper.customFileName,
      }),
    }),
  )
  create(@UploadedFile() file, @Param('id') id: number) {
    const data = {
      uri: `images/plots/${file.filename}`,
      filename: file.filename,
      plotFeatureId: id,
    };
    console.log('UPLOADNG\n');
    console.log(data);
    console.log('uploaded\n');

    return this.plotImageService.create(data);
  }

  @Get()
  findAll() {
    return this.plotImageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') plotFeatureId: string) {
    return this.plotImageService.findAllByPlot(+plotFeatureId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlotImageDto: PlotDTO) {
    return this.plotImageService.update(+id, updatePlotImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plotImageService.remove(+id);
  }
}
