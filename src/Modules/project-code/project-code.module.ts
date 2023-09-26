import { Module } from '@nestjs/common';
import { ProjectCodeService } from './Services/project-code.service';
import { ProjectCodeController } from './project-code.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectCode, ProjectCodeSchema } from './Schemas/project-code.schema';
// import { MarketService } from 'src/Modules/market/Services/market.service';
import { MarketModule } from '../Markets/market.module';
// import { UserService } from 'src/Modules/User/Services/user.service';
// import { UserModule } from 'src/Modules/User/user.module';
// import { MarketService } from 'src/market/Services/market.service';
// import { MarketModule } from 'src/market/market.module';

@Module({
  imports:[MongooseModule.forFeature([{name:"ProjectCode",schema:ProjectCodeSchema}]),MarketModule],

  controllers: [ProjectCodeController],
  providers: [ProjectCodeService],
})
export class ProjectCodeModule {}
