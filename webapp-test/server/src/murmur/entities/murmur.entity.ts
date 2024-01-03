import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Murmur {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    description:string;
    
    @Column()
    likecount:number;
    
    @Column()
    user_id:number;
}
