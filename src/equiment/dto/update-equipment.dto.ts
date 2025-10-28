import { PartialType } from '@nestjs/mapped-types';
import { CreateEquimentDto } from './create-equipment.dto';

export class UpdateEquimentDto extends PartialType(CreateEquimentDto) {}
