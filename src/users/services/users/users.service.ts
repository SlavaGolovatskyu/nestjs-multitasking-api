import { Injectable } from '@nestjs/common';
import { UserInterface } from 'src/users/entities/user.entity';

// This should be a real class/interface representing a user entity
export type UserInfo = UserInterface;

@Injectable()
export class UsersService {
  private readonly users: any = [
    {
      userId: 1,
      email: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      email: 'maria',
      password: 'guess',
    },
  ];

  async findOne(email: string): Promise<UserInfo | undefined> {
    return this.users.find(user => user.email === email);
  }
}