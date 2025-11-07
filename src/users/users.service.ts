import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm'; 
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

  constructor( 
    @InjectRepository(User)
    private usersRepository: Repository<User>){
    
  }

  create(createUserDto: CreateUserDto) {
    this.usersRepository.create(createUserDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  findByUsername(email: string) {
    // use a typed-safe query builder to avoid TypeScript complaints about unknown properties
    return this.usersRepository
      .createQueryBuilder('user')
      .where('user.email = :email', { email })
      .getOne();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
