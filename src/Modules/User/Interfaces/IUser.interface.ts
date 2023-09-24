import { Document } from 'mongoose';

export interface UserInterface extends Document  {
    fullName: string;
    email: string;
    password: string;
    createdAt:Date;
    updatedAt:Date
}


