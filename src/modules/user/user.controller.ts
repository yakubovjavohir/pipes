import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseInterceptors, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { IUserCreateDto } from './dto/create-user.dto';
import { IUserUpdateDto } from './dto/update-user.dto';
import { ID } from 'src/common/types';
import { LoggingInterceptor } from 'src/common/interceptors';
import { JwtAuthGuard } from '../../common/guard/guard.routes';
import { RolesGuard } from '../../common/decorator/role.guard';
import { Roles } from '../../common/decorator/role';
import { ApiBearerAuth } from '@nestjs/swagger';
@Controller('user')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
@UseInterceptors(LoggingInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: IUserCreateDto) {
    await this.userService.email(dto.email)
    const resdata = await this.userService.create(dto)
    return resdata
  }

  @ApiBearerAuth()
  @Get()
  async findAll() {
    const resdata = await this.userService.findAll()
    return resdata
  }

  @Get(':id')
  async findOne(@Param('id') id: ID) {
    const data = await this.userService.findById(id)
    return data
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: ID, @Body() dto: IUserUpdateDto) {
    const data = await this.userService.update(id, dto)
    return data
  }

  @ApiBearerAuth()
  @Delete(':id')
  async remove(@Param('id') id: ID) {
      const data = await this.userService.delete(id)
      return data
  }
}
