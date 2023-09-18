import { Document } from 'mongoose';

export interface otp extends Document  {
    email: string;
    code: string;
    expiry: Date;
    contact: string;
    createdAt:Date;
    UpdatedAt:Date
}


