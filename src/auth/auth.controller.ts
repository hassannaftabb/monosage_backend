import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { EmailLoginDto } from './dto/local.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  loginViaEmail(@Body() emailLoginDto: EmailLoginDto) {
    return this.authService.logInViaEmail(emailLoginDto);
  }
}
