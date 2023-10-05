import { Module } from '@nestjs/common';
import { UserService } from './Services/user.service';
// import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
// import { Users, UsersSchema } from './Schema/user.schema';
import { UserController } from './user.controller';
import { Users, UsersSchema } from './Schema/user.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Users.name,
        schema: UsersSchema
      },
    ])
  ], 
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService]  
})
export class UserModule {}
