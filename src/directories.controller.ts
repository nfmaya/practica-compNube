import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';
import { DirectoryService } from './directory.service';
import { UpdateDirectoryDto } from './DTO/updatedto';
import { CreateDirectoryDto } from './DTO/createdto';

@Controller('directories')
export class DirectoriesController {
  constructor(private readonly directoryService: DirectoryService) {}

  @Get()
  findAll() {
    return this.directoryService.findAll();
  }

  @Post()
  create(@Body() directoryDto: CreateDirectoryDto) {
    return this.directoryService.create(directoryDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.directoryService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() directoryDto: UpdateDirectoryDto) {
    return this.directoryService.update(+id, directoryDto);
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() directoryDto: UpdateDirectoryDto) {
    return this.directoryService.partialUpdate(+id, directoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.directoryService.remove(+id);
  }
}
