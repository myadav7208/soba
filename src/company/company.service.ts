import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { createCompanyDto } from "src/dtos/company/create.dto";
import { Company } from "src/entity/company.entity";
import { Repository } from "typeorm";

  
@Injectable()

export class companyServices{
    constructor(
        @InjectRepository(Company)
         private readonly company:Repository<Company>
      ){}


      async createCompany(data:createCompanyDto){
        return this.company.save(data)
      }
}