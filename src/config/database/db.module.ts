import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import dbConfig from "./db.config";
import * as Joi from 'joi';
import { DatabaseConfigService } from "./dbConfig.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dbConfig],
      validationSchema: Joi.object({
        TYPEORM_DATABASE: Joi.string().required(),
        TYPEORM_HOST: Joi.string().required(),
        TYPEORM_PORT: Joi.number().required(),
        TYPEORM_USERNAME: Joi.string().required(),
        TYPEORM_PASSWORD: Joi.string(),
        TYPEORM_CONNECTION: Joi.string().required(),
      }),
    })
  ],
  providers: [ConfigService, DatabaseConfigService],
  exports: [ConfigService, DatabaseConfigService],
})
export class DatabaseConfigModule {

}