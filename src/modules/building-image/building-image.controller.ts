import { BuildingImageDto } from './dto/building-image.dto';
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
import { BuildingImageService } from './building-image.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Helper } from 'src/utils/file-uploading.utils';

@Controller('building-image')
export class BuildingImageController {
  constructor(private readonly buildingImageService: BuildingImageService) {}

  @Post(':id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: Helper.buildingImagesFolder,
        filename: Helper.customFileName,
      }),
    }),
  )
  create(@UploadedFile() file, @Param('id') id: number) {
    const data: BuildingImageDto = {
      uri: `images/buildings/${file.filename}`,
      filename: file.filename,
      buildingFeatureId: id,
    };
    console.log('UPLOADNG\n');
    console.log(data);
    console.log('uploaded\n');
    return this.buildingImageService.create(data);
  }

  @Get()
  findAll() {
    return this.buildingImageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingImageService.findOne(+id);
  }

  @Get('/fid/:buildingFeatureId')
  findAllByFeature(@Param('buildingFeatureId') featureId: string) {
    return this.buildingImageService.findAllByFeature(+featureId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuildingImageDto) {
    return this.buildingImageService.update(+id, updateBuildingImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildingImageService.remove(+id);
  }
}
