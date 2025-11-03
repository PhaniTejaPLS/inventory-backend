import { Injectable } from '@nestjs/common';
import { CreateEquimentDto } from './dto/create-equipment.dto';
import { UpdateEquimentDto } from './dto/update-equipment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Equipment } from './entities/equipment.entity';
import { Between, Like, Repository } from 'typeorm';

@Injectable()
export class EquipmentService {

  constructor(
    @InjectRepository(Equipment)
    private equimentRepository: Repository<Equipment>
  ) {}

  async create(createEquimentDto: CreateEquimentDto) {
    const equipment = this.equimentRepository.create(createEquimentDto);
    return await this.equimentRepository.save(equipment);
  }

  findAll() {
    return this.equimentRepository.find();
  }

  findOne(id: number) {
    return this.equimentRepository.findOneBy({ id });
  }

  getEquipmentByQuery(queryParamObject) {
    if(Object.keys(queryParamObject).includes('name')){
      queryParamObject.name = Like(`%${queryParamObject.name}%`);
    }
    if(Object.keys(queryParamObject).includes('availablequantity')){
      queryParamObject.availablequantity = Between(0, queryParamObject.availablequantity);
    }
    if(Object.keys(queryParamObject).includes('condition') && queryParamObject.condition === 'All'){
      delete queryParamObject.condition;
    }
    console.log(queryParamObject);
    return this.equimentRepository.findBy(queryParamObject);
  }

  update(id: number, updateEquimentDto: UpdateEquimentDto) {
    return `This action updates a #${id} equiment`;
  }

  remove(id: number) {
    return `This action removes a #${id} equiment`;
  }
}
