import { Body, Controller, Post } from "@nestjs/common";
import { companyServices } from "./company.service";
import { createCompanyDto } from "src/dtos/company/create.dto";


@Controller()

export class companyController{
    constructor(
        private companyServices:companyServices
    ){}



    @Post('/create')

    async create(@Body() data:createCompanyDto){
        return await this.companyServices.createCompany(data)
    }
}