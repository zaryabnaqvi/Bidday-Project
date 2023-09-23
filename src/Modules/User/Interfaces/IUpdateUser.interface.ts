import { Roles } from "src/Utilities/Template/types";

export interface IUpdateUser {
    fullName?: string;
    email?: string;
    password?: string;
    role?: Roles;
}