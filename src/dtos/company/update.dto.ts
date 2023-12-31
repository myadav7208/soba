import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class updateCompanyDto {
  @IsString()
  @IsOptional()
  companyName: string;

  @IsString()
  @IsOptional()
  gst: string;

  @IsNumber()
  @IsOptional()
  contactNo: number;
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
