import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class createVendorDto {
  
  @IsString()
  @IsNotEmpty()
  companyName: string;
  @IsNumber()
  @IsNotEmpty()
   contact:number;

  @IsString()
   @IsOptional()
  gst: string;

  @IsNumber()
  @IsOptional()
  officeNo: number;
  @IsOptional()
  @IsEmail()
  email: string;
  @IsNumber()
  @IsOptional()
  pinCode: number;
  @IsString()
  @IsOptional()
  state: string;
  @IsString()
  @IsOptional()
  city: string;
}
