import {
  Body,
  Controller,
  NotFoundException,
  BadRequestException,
  Param,
  ParseIntPipe,
  Post,
  Get,
  UsePipes,
  ValidationPipe,
  Patch,
} from '@nestjs/common';
import { companyServices } from './company.service';
import { createCompanyDto } from 'src/dtos/company/create.dto';
import { updateCompanyDto } from 'src/dtos/company/update.dto';
import { Company } from 'src/entity/company.entity';
import { classToClassFromExist } from 'class-transformer';

@Controller('company')
export class companyController {
  constructor(private companyServices: companyServices) {}

  // get one company by its id

  @Get(':id')
  async getOneComapany(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Company> {
    return await this.companyServices.getOneCompany(id);
  }
  // get all company
  @Get()
  async getCompany() {
    return await this.companyServices.getALLCompany();
  }

  // create company
  @Post('create')
  @UsePipes(new ValidationPipe())
  async create(@Body() data: createCompanyDto) {
    return await this.companyServices.createCompany(data);
  }

  // update company by its id
  @Patch('update/:id')
  @UsePipes(new ValidationPipe())
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: updateCompanyDto,
  ) {
    const res = await this.companyServices.updateCompany(id, data);
    
    if (res.affected <1) {
      throw new BadRequestException('something went wrong please try again');
    }
    return {
      message: 'successfully update'
    };
  }
}
