import { Roles } from '@app/Utilities/Template/types';

export interface IAuthPayload {
  email: string;

  role: Roles;

  id: string;
}
