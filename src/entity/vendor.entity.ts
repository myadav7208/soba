import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"vendor"})


export class vendor{
    @PrimaryGeneratedColumn( )
    
    vendorId
    @Column({name:"Owner",nullable: true})
    ownerName:string
    @Column({name:"company",})
    companyName:string
    @Column({name:"contact"})
     contact:number
     @Column({name:"Email",nullable:true})
     email:string
      
     
     @Column({ nullable: true ,name:"OfficeNo"})
     officeNo: number;
     @Column({ nullable: true,name: "GST" })
     gst: string;
     @Column({name:"PinCode",nullable: true})
     pinCode: number;
     @Column({name:"State",nullable: true})
     state: string;
     @Column({name:"City",nullable: true})
     city: string;
}
