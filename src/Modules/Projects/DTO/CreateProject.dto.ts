import { IsNotEmpty, IsString, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateProjectDTO {
  @IsNotEmpty()
  @IsString()
  LCINumber: string;

  @IsNotEmpty()
  @IsString()
  ProjectName: string;

  @IsNotEmpty()
  @IsString()
  StreetAddress: string;

  @IsNotEmpty()
  CityState: {
    City: string;
    State: string;
  };

  @IsNotEmpty()
  @IsString()
  Country: string;

  @IsNotEmpty()
  @IsString()
  UserId: string;

  @IsNotEmpty()
  @IsString()
  MarketId: string;

  @IsNotEmpty()
  @IsString()
  BuildingTypeId: string;

  @IsOptional()
  @IsString()
  ProjectCode: string;

  @IsOptional()
  @IsString()
  Owner: string;

  @IsOptional()
  @IsString()
  Estimator: string;

  @IsOptional()
  @IsString()
  TypeOfBid?: string;

  @IsOptional()
  @IsString()
  BidDate?: string;

  @IsOptional()
  @IsString()
  BidTime: string;

  @IsOptional()
  @IsString()
  SiteSize: string;

  @IsOptional()
  ProjectSize: {
    TotalArea: string;
    BuildingFootprint: string;
    NumberOfFloors: string;
  };

  @IsOptional()
  ProjectTeam: {
    Principal: string;
    ProjectManager: string;
    ProjectSuperintendent: string;
    Architect: string;
    Engineer: string;
  };

  @IsOptional()
  GarageInformation: {
    GarageGSF: string;
    NumberOfParkingSpots: string;
    SFPerStall: string;
    GarageRatio: string;
  };

  @IsOptional()
  @IsString()
  BidAmount: string;

  @IsOptional()
  @IsString()
  ContractAward: string;

  ProjectDescription: string;

  @IsOptional()
  Schedule: {
    startDate: Date;
    completionDate: Date;
    durationDays: Number;
    durationWeeks: Number;
  };
}
