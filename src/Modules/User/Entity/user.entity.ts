import { Document } from 'mongoose';

export interface User extends Document  {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    password: string;
    contact: string;
}
