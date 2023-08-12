 
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"product"})


export class product{
    @PrimaryGeneratedColumn()
    id
    @Column({name:"Date"})
    data:Date
    @Column({name:"Details"})
     details:string
    @Column({name:"Rate"})
     rate:string
n
    @Column({name:"Code"})
     code:string
    @Column({name:"Size"})
     size:string
    @Column({name:"RunNo"})
     runNo:string
    @Column({name:"Bill_No"})
     billNo:string
    @Column({name:"Average"})
     average:number
    @Column({name:"Embroidary"})
     embroidary:string
    @Column({name:"Fitting_Stich"})
     fittingStich:string
    @Column({name:'Button_Stich'})
     buttonStich:string
    @Column({name:"Print"})
     print:string
    @Column({name:"Printex"})
     printex:string
    @Column({name:"K_Making"})
     kMaking:string
    @Column({name:"Tag"})
     tag:string
    @Column({name:"Label"})
     label:string
    @Column({name:"Making"})
     making:string
    @Column({name:"Canvas"})
     canvas:string
    @Column({name:"Total_Amount"})
     totalAmount:string
    @Column({name:"Product_Image"})
    productImage:string
    @Column({name:"Company_Id"})
    companyId:string

      

}