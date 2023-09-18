import { Module } from '@nestjs/common';
import { UserService } from './user.service';
// import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';

@Module({imports:[MongooseModule.forFeature([{ name:'User', schema:UserSchema}])], 
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}
