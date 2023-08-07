import {
 
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Company } from './company.entity';
 

@Entity({ name: 'Client' })
export class Client {
  @PrimaryGeneratedColumn()
  client_id;
  @Column({name:"Company"})
  companyName: string;
  @Column({name:"GST"})
  gst: string;
  @Column({ nullable: true ,name:"OfficeNo"})
  officeNo: Number;
  @Column({ nullable: true,name:"Email" })
  email: string;
  @Column({name:"PinCode"})
  pinCode: Number;
  @Column({name:"State"})
  state: string;
  @Column({name:"City"})
  city: string;
  @OneToMany((type) => Company, (Company) => Company.clients)
  @JoinTable()
  @Column({name:"Company"})
  company_id: Company[];
}
