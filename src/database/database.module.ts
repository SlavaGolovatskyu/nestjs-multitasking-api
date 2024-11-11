import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DatabaseConfigModule } from "src/config/database/db.module";
import { DatabaseConfigService } from "src/config/database/dbConfig.service";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [DatabaseConfigService],
      imports: [DatabaseConfigModule],
      useFactory: (config: DatabaseConfigService) => ({
        ...config.connections,
      })
    })
  ],
  providers: [DatabaseConfigService],
  exports: [
    DatabaseConfigService
  ]
})
export class DataBaseModule {}