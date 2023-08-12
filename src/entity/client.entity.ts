import {
 
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Company } from './company.entity';
 

@Entity({ name: 'Client' })
export class Client extends BaseEntity{
  @PrimaryGeneratedColumn()
  clientId;
  @Column({name:"Company"})
  companyName: string;
  @Column({name:"GST"})
  gst: string;
  @Column({ nullable: true ,name:"OfficeNo"})
  officeNo: number;
  @Column({ nullable: true,name:"Email" })
  email: string;
  @Column({name:"PinCode"})
  pinCode: number;
  @Column({name:"State"})
  state: string;
  @Column({name:"City"})
  city: string;

//  @ManyToOne(()=>Company )
//    company
}
