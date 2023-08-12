import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class createClientDto {
  
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  gst: string;

  @IsNumber()
  @IsOptional()
  officeNo: number;
  @IsOptional()
  @IsEmail()
  email: string;
  @IsNumber()
  @IsNotEmpty()
  pinCode: number;
  @IsString()
  @IsNotEmpty()
  state: string;
  @IsString()
  @IsNotEmpty()
  city: string;
}
