import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { EmailLoginDto } from './dto/local.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}
  async logInViaEmail(emailoginDto: EmailLoginDto) {
    const user = await this.userService.getUserByEmail(emailoginDto.email);
    if (!user) {
      throw new NotFoundException(
        `User with ${emailoginDto.email} email doesn't exist`,
      );
    }
    const passMatch = await bcrypt.compare(
      emailoginDto.password,
      user.password,
    );
    if (user && passMatch === true) {
      const payload = {
        email: user.email,
        password: user.password,
        role: user.role,
        id: user.id,
      };
      const token = this.jwtService.sign(payload);
      return {
        accessToken: token,
        email: user.email,
        id: user.id,
        name: user.username,
      };
    } else {
      throw new UnauthorizedException('Invalid Credentials');
    }
  }
}
