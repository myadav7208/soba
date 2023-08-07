import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

  @Entity({name:"User_Table"})
 export class User {
      @PrimaryGeneratedColumn({name:"UserId"})
      
      id  
      @Column({unique:true})
      username:string
      @Column({name:"Password"})
      password:string
      @Column({name:"Firstname"})
      firstname:string
      @Column({nullable:true,name:"Lastname"})
      lastanme:string

 }