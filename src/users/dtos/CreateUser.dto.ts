import { IsNotEmpty, IsEmail, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  fullName: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail({}, { message: 'Invalid email' })
  email: string

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(6, { message: 'Min length is 6 characters' })
  @MaxLength(40, { message: 'Max length is 20 characters' })
  password: string
}