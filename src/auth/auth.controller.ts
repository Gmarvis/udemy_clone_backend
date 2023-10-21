import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signUp.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateProfileDto } from './dto/updateProfile.dto';
import { User } from './schemas/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // signup
  @Post('/signup')
  async signUp(@Body() signUpDto: SignUpDto): Promise<any> {
    console.log('dto', signUpDto);

    return this.authService.signUp(signUpDto);
  }

  // login
  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.authService.login(loginDto);
  }

  // update Profile
  @Put(':id')
  async UpdateProfile(
    @Param('id')
    id: string,
    @Body()
    user: UpdateProfileDto,
  ): Promise<User> {
    return this.authService.updateProfile(id, user);
  }

  // finUserBy id
  @Get(':id')
  async FindUser(
    @Param('id')
    id: string,
  ): Promise<User> {
    return this.authService.findUser(id);
  }

  // get all users
  @Get()
  async GetAllUsers(): Promise<User[]> {
    return this.authService.getAllUser();
  }

  @Get('user/:token')
  async GetUserFronToken(
    @Param('token')
    token: string,
  ): Promise<User> {
    return await this.authService.getFronToken(token);
  }
}
