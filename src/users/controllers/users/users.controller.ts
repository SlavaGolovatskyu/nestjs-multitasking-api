import { Body, Controller, UseGuards, Request, Get, Param, Post, Query, Req, Res, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers(@Query('sortBy') sortBy: string) {
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
  }

  @Post()
  createUser(@Body() userData: CreateUserDto) {
  }
}
