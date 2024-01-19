import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { LocalAuthGuard } from "./local/local-auth.guard";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt/jwt-auth.guard";


@Controller('auth')
export class AuthController{
    constructor(private authService:AuthService){}
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req):Promise<any>{
        return this.authService.login(req.user)
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user
    }
}