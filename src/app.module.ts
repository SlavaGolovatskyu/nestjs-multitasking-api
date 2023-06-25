import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        return {
          type: config.get<'postgres'>('TYPEORM_CONNECTION'),
          host: config.get<string>('TYPEORM_HOST'),
          username: config.get<string>('TYPEORM_USERNAME'),
          password: config.get<string>('TYPEORM_PASSWORD'),
          database: config.get<string>('TYPEORM_DATABASE'),
          port: Number(config.get<number>('TYPEORM_PORT')),
          entities: [__dirname + '/**/*.entity.{js,ts}'],
          synchronize: config.get<string>('ENVIRONMENT') === 'production' ? false : true,
          autoLoadEntities: true,
          logging: true,
          migrationsTableName: 'typeorm_migrations',
          migrations: ['src/migration/*.ts'],
          cli: {
            migrationsDir: 'src/migration',
          },
          ssl: config.get<string>('ENVIRONMENT') === 'production',
        }
      },
      inject: [ConfigService],
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
