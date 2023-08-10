import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './entity/user.entity';
import { userModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from '../config';
import { companyModule } from './company/company.module';
import { Company } from './entity/company.entity';
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
         synchronize:true,
         autoLoadEntities:true,
         

        entities: ['dist/**/*.entity.js'],
      }),
    }),
    companyModule,
    AuthModule,
    userModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
