import { ConfigModule,ConfigService } from "@nestjs/config";
import {TypeOrmModuleAsyncOptions,TypeOrmModuleOptions} from "@nestjs/typeorm"


export const typeOrmAsyncConfig:TypeOrmModuleAsyncOptions={
    useFactory:async():Promise<TypeOrmModuleOptions>=>{
          return {
                type:'postgres',
                host:process.env.DB_HOST,
                port:parseInt(process.env.DB_PORT,10),
                database:process.env.DB_NAME,
                username:process.env.DB_USERNAME,
                password:process.env.DB_PASSWORD,
                entities:[__dirname + '/../**/*.entity{.ts,.js}'],
                migrations:[__dirname+'/../**/*.entity{.ts,.js}'],
                synchronize:true,
                logging:true
          }
    }
}
