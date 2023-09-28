import mongoose, { Document, Types } from 'mongoose';
import { ProjectCode } from 'src/Modules/project-code/Schemas/project-code.schema';
export type MarketDocument = Market & Document;
export declare class Market {
    name: string;
    ProjectCodeIds: ProjectCode[];
}
export declare const MarketSchema: mongoose.Schema<Market, mongoose.Model<Market, any, any, any, mongoose.Document<unknown, any, Market> & Market & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Market, mongoose.Document<unknown, {}, Market> & Market & {
    _id: Types.ObjectId;
}>;
