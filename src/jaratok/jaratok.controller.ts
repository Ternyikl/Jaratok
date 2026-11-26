import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JaratokService } from './jaratok.service.js';
import { CreateJaratokDto } from './dto/create-jaratok.dto.js';
import { UpdateJaratokDto } from './dto/update-jaratok.dto.js';

@Controller('jaratok')
export class JaratokController {
  constructor(private readonly jaratokService: JaratokService) {}

  
  @Get('megallok')
  getMegallok(){
    return this.jaratokService.getMegallok();
  } 

  @Post()
  create(@Body() createJaratokDto: CreateJaratokDto) {
    return this.jaratokService.create(createJaratokDto);
  }

  @Get()
  findAll() {
    return this.jaratokService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jaratokService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJaratokDto: UpdateJaratokDto) {
    return this.jaratokService.update(+id, updateJaratokDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jaratokService.remove(+id);
  }
}
