import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Token } from './entities/token.entity';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forFeature([Token]),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [
    AuthService,
    TypeOrmModule.forFeature([Token]),
  ],
})
export class AuthModule {}