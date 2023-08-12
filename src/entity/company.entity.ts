import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";
import { Exclude } from "class-transformer";

@Entity({name:"Company"})
export class Company extends BaseEntity{
   
     @PrimaryGeneratedColumn()
     companyId
     @Column()
     companyName:string
     @Column()
     gst:string
     @Column({nullable:true})
     contactNo:number
     @Column({nullable:true})
     email:string
     @Column( )
     address:string
      @Column()
      state:string
      @Column()
      city:string
    
      // @Exclude()
      // @OneToMany(() => Client, (client) =>client.company)

      // @Column()
      // clients:Client
}