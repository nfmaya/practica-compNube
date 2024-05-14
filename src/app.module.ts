import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { directoryModule } from './directory.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_PASS,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASS,
      autoLoadEntities: true,
      synchronize: true,
    }),
    directoryModule,
  ],
})
export class AppModule {}
