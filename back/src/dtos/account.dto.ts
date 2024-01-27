import { IsNotEmpty } from "class-validator";

export class createAccountDto{
    @IsNotEmpty()
    username:string;

    @IsNotEmpty()
    character:string;
}

export class updateAccountDto{
    @IsNotEmpty()
    progress:number;
    @IsNotEmpty()
    xp_points:number;
}