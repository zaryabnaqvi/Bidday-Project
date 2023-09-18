import { PartialType } from '@nestjs/mapped-types';
import { createUserDTO } from './CreateUser.dto';

export class UpdateUserDto extends PartialType(createUserDTO) {
    firstName?: string;
    lastName?: string;
    email?: string;
    age?: number;
    password?: string;
    contact?: string;
}
