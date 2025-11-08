import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req, Put } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { CreateEquimentDto } from './dto/create-equipment.dto';
import { UpdateEquimentDto } from './dto/update-equipment.dto';
import { parse } from 'path';

@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equimentService: EquipmentService) {}

  @Post()
  create(@Body() createEquimentDto: CreateEquimentDto) {
    return this.equimentService.create(createEquimentDto);
  }

  
  @Get()
  getEquipment(@Query() query:any) {
    
   
    if(Object.keys.length == 0){
      return this.equimentService.findAll();
    }else{
      return this.equimentService.getEquipmentByQuery(query);
    }
  }

  @Get(':id')
  getEquipmentByTag(@Param('id') id: string) {
    return this.equimentService.findOne(+id);
  }

  @Put(':id')
  async replace(@Param('id') id: string, @Body() updateEquimentDto: UpdateEquimentDto) {
    console.log(updateEquimentDto);
    const equipId = parseInt(id);
    updateEquimentDto.id = equipId;
    return await this.equimentService.replace(equipId, updateEquimentDto);
  }
  


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquimentDto: UpdateEquimentDto) {
    return this.equimentService.update(+id, updateEquimentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equimentService.remove(+id);
  }
}
