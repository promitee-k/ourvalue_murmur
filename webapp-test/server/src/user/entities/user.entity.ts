import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"user"})
export class User {
    @PrimaryColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    followercount:number;

    @Column()
    followingcount:number;
}
