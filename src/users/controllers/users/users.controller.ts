import { Body, Controller, Get, Param, Post, Query, Req, Res, ValidationPipe } from '@nestjs/common';
import { Response, Request } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers(@Query('sortBy') sortBy: string) {
    console.log(sortBy)

    return { users: ['1', '2', '3'], sortBy }
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    console.log(id);

    return { id }
  }

  @Post()
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData)
  }
}
