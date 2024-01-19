import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from 'config/typeorm';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { QuestionsModule } from './questions/questions.module';
@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({isGlobal:true}),
  TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
  AccountModule,
  AuthModule,
  QuestionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
