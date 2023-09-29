export declare class CreateProjectDto {
    LCINumber: string;
    ProjectName: string;
    StreetAddress: string;
    CityState: {
        City: string;
        State: string;
    };
    Country: string;
    UserId: string;
    MarketId: string;
    BuildingTypeId: string;
    ProjectCode: string;
    Owner: string;
    Estimator: string;
    TypeOfBid?: string;
    BidDate?: string;
    BidTime: string;
    SiteSize: string;
    ProjectSize: {
        TotalArea: string;
        BuildingFootprint: string;
        NumberOfFloors: string;
    };
    ProjectTeam: {
        Principal: string;
        ProjectManager: string;
        ProjectSuperintendent: string;
        Architect: string;
        Engineer: string;
    };
    GarageInformation: {
        GarageGSF: string;
        NumberOfParkingSpots: string;
        SFPerStall: string;
        GarageRatio: string;
    };
    BidAmount: string;
    ContractAward: string;
    Schedule: {
        startDate: Date;
        completionDate: Date;
        durationDays: Number;
        durationWeeks: Number;
    };
}
