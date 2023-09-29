import { Module } from '@nestjs/common';
// import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DivisionController } from './division.controller';
import { Divisions, DivisionsSchema } from './Schema/division.schema';
import { DivisionService } from './Services/division.service';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Divisions.name,
        schema: DivisionsSchema
      },
    ])
  ], 
  controllers: [DivisionController],
  providers: [DivisionService],
  exports:[DivisionService]  
})
export class DivisionModule {}
