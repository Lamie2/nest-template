import { Body, Controller, Post } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { RegisterUserRequest } from 'src/models/registerUserRequest';
import { User } from 'src/models/user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createProduct(@Body() request: RegisterUserRequest): number {
    console.debug(request);
    return this.usersService.register(request);
  }

  @Get('/current')
  getCurrentUser(): User {
    return {
      email: 'mail@mail.com',
      name: 'John',
      id: 42,
      password: '',
    };
  }
}