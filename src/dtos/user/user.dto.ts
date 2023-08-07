import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class userDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsNotEmpty()
  firstname: string;
  @IsString()
  @IsOptional()
  lastname: string;
}
