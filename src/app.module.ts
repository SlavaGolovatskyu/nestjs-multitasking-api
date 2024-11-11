import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

import { User } from './users/entities/user.entity';
import { DatabaseConfigModule } from './config/database/db.module';
import { DataBaseModule } from './database/database.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseConfigModule,
    DataBaseModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AuthService, JwtService],
})
export class AppModule {}
