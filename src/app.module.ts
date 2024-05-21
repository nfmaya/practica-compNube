import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { directoryModule } from './directory.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        entities:[],     
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    directoryModule,
  ],
})
export class AppModule {}
