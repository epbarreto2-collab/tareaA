import { Controller, Get, Post, Put, Patch, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/users')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/user/:id')
  getUser(@Param('id') id: string): string {
    return this.appService.getuser(id);
  }

  @Post('/user')
  post(): string {
    return this.appService.crear();
  }

  @Put('/user/:id')
  putUser(@Param('id') id: string): string {
    return this.appService.putunuser(id);
  }

  @Patch('/user/:id')
  patchUser(@Param('id') id: string): string {
    return this.appService.patchuser(id);
  }
  @Delete('/user/:id')
  deleteUser(@Param('id') id: string): string {
    return this.appService.deleteuser(id);
  } 
}

