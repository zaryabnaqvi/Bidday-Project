import { Module } from '@nestjs/common';
import { UserService } from './Services/user.service';
// import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from './schema/user.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Users.name,
        schema: UsersSchema
      },
    ])
  ], 
  providers: [UserService],
  exports:[UserService,]  
})
export class UserModule {}
