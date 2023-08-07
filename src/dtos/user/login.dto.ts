import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class loginDto {
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
