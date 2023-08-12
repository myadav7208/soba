import { Injectable ,BadRequestException,NotFoundException} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
 
import { updateCompanyDto } from "src/dtos/company/update.dto";
import { Company } from "src/entity/company.entity";
import { Repository } from "typeorm";

  
@Injectable()

export class companyServices{
    constructor(
        @InjectRepository(Company)
         private readonly company:Repository<Company>
      ){}
   async getOneCompany(id:number){
     const company= await this.company.findOne({
      where:{
        companyId:id
      }
     })
     if(!company){
      throw new NotFoundException("company does not exist")
      
  }
  return company
   }
     async getALLCompany ():Promise<Company[]> {
               const allCompany= await this.company.find()
             
                if(!allCompany.length){
                  throw new NotFoundException("no company found")
               }
               return allCompany;
     }
      async createCompany(data ) {
        return await this.company.save(data)
      }
      async updateCompany(id:number,data:Partial<updateCompanyDto>){

          if(!id){
          throw new BadRequestException('something went wrong')
          }
        return this.company.update({companyId:id},data )
     
      }
}