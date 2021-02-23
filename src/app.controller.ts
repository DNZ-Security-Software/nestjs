nmodul

import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import {Module} from 'node:module';
import {Z_NO_COMPRESSION} from 'node:zlib';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): string {
    return 'Get all items';
  }
  @Post()
  create(): string {
    return 'Create new items';
  }
}