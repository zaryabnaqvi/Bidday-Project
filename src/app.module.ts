import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './Modules/User/user.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './Modules/Authentication/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://aza-e-hussain:cz9Am1Y4VJHrf8ZY@cluster0.oakgoec.mongodb.net/Bidday?retryWrites=true&w=majority"),
    UserModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
