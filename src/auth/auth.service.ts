import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
//import { JwtService } from '@nestjs/jwt';
import { User } from 'src/models/user';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  validateUserCredentials(
    name: string,
    password: string,
  ): User | undefined {
    console.log(name, password);
    const user = this.usersService.getUser(name, password);

    return user;
  }

  async loginWithCredentials(user: User) {
    const payload = { username: user.email, id: user.id };

    return {
      username: user.email,
      userId: user.id,
      //avatar: user.,
      access_token: this.jwtService.sign(payload),
      expiredAt: Date.now() + 60000,
    };
  }
}