import { IsOptional, IsString } from "class-validator";

export class UpdateProjectDTO {
  @IsOptional()
  @IsString()
  LCINumber?: string;

  @IsOptional()
  @IsString()
  ProjectName?: string;

  @IsOptional()
  @IsString()
  StreetAddress?: string;

  @IsOptional()
  CityState?: {
    City?: string;
    State?: string;
  };

  @IsOptional()
  @IsString()
  Country?: string;

  @IsOptional()
  @IsString()
  UserId?: string;

  @IsOptional()
  @IsString()
  MarketId?: string;

  @IsOptional()
  @IsString()
  BuildingTypeId?: string;

  @IsOptional()
  @IsString()
  ProjectCode?: string;

  @IsOptional()
  @IsString()
  Owner?: string;

  @IsOptional()
  @IsString()
  Estimator?: string;

  @IsOptional()
  @IsString()
  TypeOfBid?: string;

  @IsOptional()
  @IsString()
  BidDate?: string;

  @IsOptional()
  @IsString()
  BidTime?: string;

  @IsOptional()
  @IsString()
  SiteSize?: string;

  @IsOptional()
  ProjectSize?: {
    TotalArea?: string;
    BuildingFootprint?: string;
    NumberOfFloors?: string;
  };

  @IsOptional()
  ProjectTeam?: {
    Principal?: string;
    ProjectManager?: string;
    ProjectSuperintendent?: string;
    Architect?: string;
    Engineer?: string;
  };

  @IsOptional()
  GarageInformation?: {
    GarageGSF?: string;
    NumberOfParkingSpots?: string;
    SFPerStall?: string;
    GarageRatio?: string;
  };

  @IsOptional()
  @IsString()
  BidAmount?: string;

  @IsOptional()
  @IsString()
  ContractAward?: string;


  @IsOptional()
  Schedule?: {
    startDate?: Date;
    completionDate?: Date;
    durationDays?: Number;
    durationWeeks?: Number;
  };
}