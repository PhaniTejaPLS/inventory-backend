import { Injectable } from '@nestjs/common';
import { CreateBorrowRequestDto } from './dto/create-borrow_request.dto';
import { UpdateBorrowRequestDto } from './dto/update-borrow_request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BorrowRequest } from './entities/borrow_request.entity';
import { BorrowItem } from '../borrow_item/entities/borrow_item.entity';

@Injectable()
export class BorrowRequestService {

  constructor(
    @InjectRepository(BorrowRequest)
    private borrowRequestRepository: Repository<BorrowRequest>,
    
    @InjectRepository(BorrowItem)
    private borrowItemRepository: Repository<BorrowItem>,
  ){

  }

  async create(createBorrowRequestDto: CreateBorrowRequestDto): Promise<BorrowRequest> {
    console.log(createBorrowRequestDto)
    const borrowRequest = this.borrowRequestRepository.create(createBorrowRequestDto);
    const savedRequest = await this.borrowRequestRepository.save(borrowRequest);

    const borrowItems = await Promise.all(createBorrowRequestDto.items.map(async (itemDto) => {
      const borrowItem = this.borrowItemRepository.create({
        borrowRequest: savedRequest,
        equipment: { id: itemDto.equipmentId },
        quantity: itemDto.quantity,
        returnDate: itemDto.returnDate,
        borrowDate: itemDto.borrowDate
      });
      await this.borrowItemRepository.save(borrowItem);
    }));

    return savedRequest;
  }

  findAll() {
    return `This action returns all borrowRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} borrowRequest`;
  }

  update(id: number, updateBorrowRequestDto: UpdateBorrowRequestDto) {
    return `This action updates a #${id} borrowRequest`;
  }

  remove(id: number) {
    return this.borrowRequestRepository.delete(id)
  }

  findByUserId(userId: number) {
    return this.borrowRequestRepository.find({
      where: {
        userId: userId
      }
    });
  }

  async getRequestDetailsByRequestId(requestId:number) {
    console.log(requestId)
    return await this.borrowItemRepository
  .createQueryBuilder('bi')
  .innerJoin('bi.equipment', 'e')
  .innerJoin('bi.borrowRequest', 'br') 
  .where('br.id = :requestId', { requestId })
  .select([
    'e.name AS "equipmentName"',
    'e.tag AS "equipmentTag"',
    'bi.quantity AS "borrowedQuantity"',
    'bi.borrowDate AS "borrowDate"',
    'bi.returnDate AS "returnDate"',
  ])
  .orderBy('bi.borrowDate', 'DESC')
  .addOrderBy('e.name', 'ASC')
  .getRawMany(); 
  }

}
