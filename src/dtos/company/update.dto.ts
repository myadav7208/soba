import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class createCompanyDto {
  @IsString()
  @IsOptional()
  companyName: string;

  @IsString()
  @IsOptional()
  gst: string;

  @IsNumber()
  @IsOptional()
  contactNo: Number;
  @IsOptional()
  @IsEmail()
  email: string;
  @IsString()
  @IsOptional()
  address: string;
  @IsString()
  @IsOptional()
  state: string;
  @IsString()
  @IsOptional()
  city: string;
}
