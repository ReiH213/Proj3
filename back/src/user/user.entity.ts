import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt'
import { Account } from "src/account/account.entity";


@Entity({name:'users'})
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    username:string;

    @Column()
    password:string;

    @Column({
        unique:true
    })
    email:string;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;


    @BeforeInsert()
    async setPassword(password:string){
        const salt = await bcrypt.genSalt()
        this.password = await bcrypt.hash(password||this.password,salt)
    }

    @OneToOne(()=>Account,(account)=>account.user)
    @JoinColumn()
    account:Account
}

