import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { FileService } from './file.service';
import { CreateFileDto } from './dto/create-file.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @UseInterceptors(FileInterceptor('ok'))
  @Post("single")
  async createSingle(
    @Body() dto: CreateFileDto, 
    @UploadedFile() file: Express.Multer.File) {
      console.log("body : ", dto);
      console.log("file : ", file);
      
    if(
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/apng" ||
      file.mimetype === "image/avif" || 
      file.mimetype === "image/gif" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/svg"){
      await writeFile(
        join(__dirname,  "../../../uploads/images/" + file.originalname),
        file.buffer
      )
    }

    if(
      file.mimetype === "video/mp4" ||
      file.mimetype === "video/mpeg" ||
      file.mimetype === "video/mpkg" ||
      file.mimetype === "video/odp"
    ){
      await writeFile(
        join(__dirname,  "../../../uploads/videos/" + file.originalname),
        file.buffer
      )
    }



    if(
      file.mimetype === "application/pdf" ||
      file.mimetype === "application/zip" ||
      file.mimetype === "application/xml"
    ){
      await writeFile(
        join(__dirname,  "../../../uploads/pdf/" + file.originalname),
        file.buffer
      )
    }



    return this.fileService.create(dto);
  }
}
