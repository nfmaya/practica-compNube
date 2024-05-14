import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Directory } from './directory.entity';
import { CreateDirectoryDto } from './DTO/createdto';
import { UpdateDirectoryDto } from './DTO/updatedto';

@Injectable()
export class DirectoryService {
  constructor(
    @InjectRepository(Directory)
    private directoryRepository: Repository<Directory>,
  ) {}

  async findAll(): Promise<Directory[]> {
    return await this.directoryRepository.find();
  }

  async create(directoryDto: CreateDirectoryDto): Promise<Directory> {
    const directory = this.directoryRepository.create(directoryDto);
    return await this.directoryRepository.save(directory);
  }

  async findOne(id: number): Promise<Directory> {
    return await this.directoryRepository.findOneBy({id});
  }

  async update(id: number, directoryDto: UpdateDirectoryDto): Promise<Directory> {
    await this.directoryRepository.update(id, directoryDto);
    return await this.directoryRepository.findOneBy({id});
  }

  async partialUpdate(id: number, directoryDto: UpdateDirectoryDto): Promise<Directory> {
    await this.directoryRepository.update(id, directoryDto);
    return await this.directoryRepository.findOneBy({id});
  }

  async remove(id: number): Promise<void> {
    await this.directoryRepository.delete(id);
  }
}
