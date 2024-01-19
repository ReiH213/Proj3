import { User } from "src/user/user.entity";
import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'accounts'})
export class Account extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    username:string
    @Column()
    character:string;

    @Column({
        default:0
    })
    level:number;
    @Column({
        default:0
    })
    progress:number;
    @Column({
        default:0
    })
    xp_points:number
    @OneToOne(()=>User,(user)=>user.account)
    user:User

    
}