import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class updateClientDto {
    @IsString()
    @IsOptional()
    companyName: string;
  
    @IsString()
    @IsOptional()
    gst: string;
  
    @IsNumber()
    @IsOptional()
    officeNo: number;
    @IsOptional()
    @IsEmail()
    email: string;
    @IsString()
    @IsOptional()
    pinCode: number;
    @IsString()
    @IsOptional()
    state: string;
    @IsString()
    @IsOptional()
    city: string;
  }