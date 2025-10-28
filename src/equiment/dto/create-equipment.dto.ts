import { IsString, IsNotEmpty, IsOptional } from 'class-validator';


export class CreateEquimentDto {

    @IsNotEmpty()
    id:number;

    @IsNotEmpty()
    @IsString()
    name:string;


    @IsNotEmpty()
    @IsString()
    category:string;

    @IsNotEmpty()
    @IsString()
    condition:string;

    @IsNotEmpty()
    quantity:number;

    @IsNotEmpty()
    availablequantity:number;

    @IsOptional()
    @IsString()
    description:string;

}
