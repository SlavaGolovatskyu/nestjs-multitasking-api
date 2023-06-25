import { IsNotEmpty, IsEmail, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  fullName: string

  @IsNotEmpty()
  @IsEmail({}, { message: 'Invalid email' })
  email: string

  @IsNotEmpty()
  @MinLength(6, { message: 'Min length is 6 characters' })
  @MaxLength(40, { message: 'Max length is 20 characters' })
  password: string
}