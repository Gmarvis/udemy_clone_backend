import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signUp.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './schemas/user.schema';
import { UpdateProfileDto } from './dto/updateProfile.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  // signup logic
  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { name, email, password } = signUpDto;
    // console.log('service', { name, email, password });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = this.jwtService.sign({ id: user._id });

    return { token };
  }

  // signin logic
  async login(loginDto: LoginDto): Promise<{ token: string }> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid Email');
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      throw new UnauthorizedException('in correct password');
    }
    const token = this.jwtService.sign({
      id: user._id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      avatar: user.avatar,
      headline: user.headline,
      biography: user.biography,
      website: user.website,
      facebook: user.facebook,
      linkedin: user.linkedin,
      youtube: user.youtube,
    });
    return { token };
  }

  // update profile function
  async updateProfile(id: string, user: UpdateProfileDto): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, user, {
      new: true,
      runValidators: true,
    });
  }

  // get all user
  async getAllUser(): Promise<User[]> {
    return await this.userModel.find();
  }

  // find user by id
  async findUser(id: string): Promise<User> {
    return await this.userModel.findById(id);
  }

  // get user with token
  async getFronToken(token: string): Promise<User> {
    const userData = this.jwtService.verify(token);
    console.log('userData: ', userData);
    return await this.userModel.findById(userData.id);
  }

  // delete keys
  removeKeys: (obj, excluded_keys: string[]) => any = (obj, excluded_keys) => {
    const new_obj = {};

    for (const key in obj) {
      if (excluded_keys.includes(key)) continue;
      new_obj[key] = obj[key];
    }
    return new_obj;
  };
}
