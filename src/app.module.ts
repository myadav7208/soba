import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './entity/user.entity';
import { userModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from '../config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
       

      inject: [ConfigService],

      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        username:configService.get("user"),
        password: configService.get('password'),
        host: configService.get('host'),
        port: configService.get('dbPort'),
        database: configService.get('database'),

         

        entities: [User],
      }),
    }),

    AuthModule,
    userModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
