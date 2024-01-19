import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { LocalStrategy } from "./local/local.strategy";
import { JwtStrategy } from "./jwt/jwt.strategy";
import { jwtConstants } from "./jwt/constants";
import { UserModule } from "src/user/user.module";

@Module({
    imports:[UserModule,PassportModule,JwtModule.register({
        secret:jwtConstants.secret,
        signOptions:{expiresIn:'1d'}
    })],
    controllers:[AuthController],
    providers:[AuthService,LocalStrategy,JwtStrategy],
    exports:[JwtStrategy]
})

export class AuthModule{}