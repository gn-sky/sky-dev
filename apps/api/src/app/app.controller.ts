import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('trucks')
  getTrucks() {
    return this.appService.getTrucks();
  }

  @Post('addTruck')
  addTruck() {
    return this.appService.addTruck();
  }
}
