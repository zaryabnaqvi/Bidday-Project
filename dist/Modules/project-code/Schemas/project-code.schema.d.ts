import mongoose, { Document, Types } from 'mongoose';
export type ProjectCodeDocument = ProjectCode & Document;
export declare class ProjectCode {
    name: string;
    MarketId: Types.ObjectId;
}
export declare const ProjectCodeSchema: mongoose.Schema<ProjectCode, mongoose.Model<ProjectCode, any, any, any, mongoose.Document<unknown, any, ProjectCode> & ProjectCode & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ProjectCode, mongoose.Document<unknown, {}, ProjectCode> & ProjectCode & {
    _id: Types.ObjectId;
}>;
