import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";
import { MESSAGES,REGEX } from "utils/utils";

export class CreateUserDto{
    @IsNotEmpty()
    username:string;

    @IsNotEmpty()
    @IsEmail()
    email:string;


    @IsNotEmpty()
    @Length(8,24)
    @Matches(REGEX.PASSWORD_RULE,{
        message:MESSAGES.PASSWORD_RULE_MESSAGE
    })
    password:string;

    @IsNotEmpty()
    @Length(8,24)
    @Matches(REGEX.PASSWORD_RULE,{
        message:MESSAGES.PASSWORD_RULE_MESSAGE
    })
    confirm:string;
    
    @IsNotEmpty()
    character:string;
}