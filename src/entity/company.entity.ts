import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";

@Entity({name:"Company"})
export class Company{
   
     @PrimaryGeneratedColumn()
     companyId
     @Column()
     companyName:string
     @Column()
     gst:string
     @Column({nullable:true})
     contactNo:Number
     @Column({nullable:true})
     email:string
     @Column( )
     address:string
      @Column()
      state:string
      @Column()
      city:string
      // @ManyToOne(()=>Client,client=>client.company_id)
      // clients:Client
}