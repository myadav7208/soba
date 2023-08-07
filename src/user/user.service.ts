
import {Injectable} from '@nestjs/common'
import {InjectRepository}  from '@nestjs/typeorm'
import { NotFoundError } from 'rxjs';
import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";

 interface userData{
 
    firstname:string,
    lastname?:string,
    username:string,
    password:string
 }
@Injectable()


export class userService{
    constructor(
        @InjectRepository(User)
        private users:Repository<User>
    ){}


    async createUser(user:userData){
        return   await this.users.save(user)
         
          
    }
    async findById(id:number){
        const user= await this.users.find({
            where:{
                id
            }
        }) 
         if(!user){
           return   NotFoundError
         }
          return user
    }
    async findUser(username:string){
        const user=await this.users.findOne({
            where:{
                username
            }
        })

        return user
    }
}