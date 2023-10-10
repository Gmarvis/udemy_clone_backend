import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  // get users
  @Get()
  async getAllUser(): Promise<User[]> {
    return this.userService.findAll();
  }

  // create user
  @Post()
  async createUser(
    @Body()
    user,
  ): Promise<User> {
    return this.userService.createUser(user);
  }
}
