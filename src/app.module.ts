import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './entity/user.entity';
import { userModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:"mysql",
      username:"soba",
      password:"soba123",
      host:"localhost",
      port:3306,
     database:"Soba",
     entities:[User],
  
 
      
    }),
    ConfigModule.forRoot(),
    AuthModule,
    userModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
