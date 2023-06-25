import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  fetchUsers() {
    return [{ id: 1 }, { id: 2 }];
  }
}
