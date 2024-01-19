import { IsNotEmpty } from "class-validator";

export class createAccountDto{
    @IsNotEmpty()
    username:string;

    @IsNotEmpty()
    character:string;
}

export class updateAccountDto{
    id:string;
    level?:number;
    progress?:number;
    xp_points?:number;
}