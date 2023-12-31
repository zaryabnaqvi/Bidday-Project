import { Roles } from "../../../Utilities/Template/types";

export interface ICreateUser {
    fullName: string;
    email: string;
    password: string;
    role: Roles;
}