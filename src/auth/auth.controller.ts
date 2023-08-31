import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { EmailLoginDto } from './dto/local.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth CRUD APIs')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  loginViaEmail(@Body() emailLoginDto: EmailLoginDto) {
    return this.authService.logInViaEmail(emailLoginDto);
  }
}
