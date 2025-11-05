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
  const qb = this.equimentRepository.createQueryBuilder('equipment');

  if (queryParamObject.name) {
    qb.andWhere('equipment.name LIKE :name', { name: `%${queryParamObject.name}%` });
  }

  if (queryParamObject.availablequantity) {
    qb.andWhere('equipment.availablequantity BETWEEN :min AND :max', { 
      min: 0, 
      max: parseInt(queryParamObject.availablequantity) 
    });
  }

  if (queryParamObject.condition && queryParamObject.condition !== 'All') {
    qb.andWhere('equipment.condition = :condition', { condition: queryParamObject.condition });
  }

  return qb.getMany();
}


  update(id: number, updateEquimentDto: UpdateEquimentDto) {
    return `This action updates a #${id} equiment`;
  }

  remove(id: number) {
    return `This action removes a #${id} equiment`;
  }
}
