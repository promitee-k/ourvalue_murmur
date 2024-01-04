import { User } from "src/user/entities/user.entity";
import { Column, Entity,  JoinColumn,  ManyToOne,  PrimaryGeneratedColumn,  } from "typeorm";

@Entity({name:"murmur"})
export class Murmur {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    description:string;
    
    @Column({ default: 0 })
    likecount:number;

    @ManyToOne(() => User, user => user.murmurs)
    @JoinColumn({ name: 'user_id' })
    user: User; 

    @Column()
    user_id: number; 
  }

