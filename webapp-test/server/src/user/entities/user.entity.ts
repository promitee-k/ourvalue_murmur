import { Murmur } from "src/murmur/entities/murmur.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({name:"user"})
export class User {
    @PrimaryColumn()
    id:number;

    @Column()
    name:string;

    @Column({ default: 0 })
    followercount:number;

    @Column({ default: 0 })
    followingcount:number;
    @Column({ default: '' }) 
    following: string;


    @OneToMany(() => Murmur, murmur => murmur.user)
  murmurs: Murmur[];
}
