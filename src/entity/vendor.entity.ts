import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"vendor"})


export class vendor{
    @PrimaryGeneratedColumn()
    id
    
}
