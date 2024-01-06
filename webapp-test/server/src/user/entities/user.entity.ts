import { Murmur } from "src/murmur/entities/murmur.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

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

    @OneToMany(() => Murmur, murmur => murmur.user)
  murmurs: Murmur[];
}
