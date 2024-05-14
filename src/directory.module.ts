import { Module } from "@nestjs/common";
import { DirectoriesController } from "./directories.controller";
import { DirectoryService } from "./directory.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Directory } from "./directory.entity";


@Module({
  controllers: [DirectoriesController],
  providers: [DirectoryService],
  imports: [
    TypeOrmModule.forFeature([ Directory ])
  ]
})

export class directoryModule {}