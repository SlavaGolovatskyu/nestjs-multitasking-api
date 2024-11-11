import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ConnectOptions } from "typeorm";

@Injectable()
export class DatabaseConfigService {
  constructor(private readonly configService: ConfigService) {}

  get postgresqlHost() {
    return this.configService.get('database.postgresql.host');
  }

  get postgresqlUsername() {
    return this.configService.get('database.postgresql.username');
  }

  get postgresqlPort() {
    return this.configService.get('database.postgresql.port');
  }

  get postgresqlPassword() {
    return this.configService.get('database.postgresql.password');
  }

  get postgresqlDbName() {
    return this.configService.get('database.postgresql.database');
  }

  get posgresqlType() {
    return this.configService.get('database.postgresql.type');
  }

  get entities() {
    return this.configService.get('database.postgresql.entities');
  }

  get migrations() {
    return this.configService.get('database.postgresql.migrations');
  }

  get connections() {
    return {
      type: this.posgresqlType,
      host: this.postgresqlHost,
      port: this.postgresqlPort,
      username: this.postgresqlUsername,
      password: this.postgresqlPassword,
      database: this.postgresqlDbName,
      entities: this.entities,
      migrations: this.migrations,
      autoLoadEntities: true,
      synchronize: false,
      migrationsRun: true,
    } as Partial<ConnectOptions>;
  }
}