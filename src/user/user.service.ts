import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}

  // find user function
  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  // create user
  async createUser(user: User): Promise<User> {
    const res = await this.userModel.create(user);
    return res;
  }
}
