import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './Modules/User/user.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './Modules/Authentication/auth.module';
import { config } from 'dotenv';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true, 
      load: [config] 
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MongoDB_URL,
        // uri : 'mongodb://localhost:27017/meloTest'
      }),
    }),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
