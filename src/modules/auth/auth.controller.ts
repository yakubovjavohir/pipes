import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UsePipes(new ValidationPipe())
  @Post('login')
  async login(@Body() req:LoginAuthDto) {
    const user = await this.authService.validateUser(req.email, req.password);
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    return this.authService.login(user);
  }

}


