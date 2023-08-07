import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";

@Entity({name:"company table"})
export class Company{
   
     @PrimaryGeneratedColumn()
     Company_id
     @Column()
     CompanyName:string
     @Column()
     GST:string
     @Column({nullable:true})
     ContactNo:Number
     @Column({nullable:true})
     Email:string
     @Column( )
     Address:string
      @Column()
      state:string
      @Column()
      city:string
      @ManyToOne(()=>Client,client=>client.company_id)
      clients:Client[]
}