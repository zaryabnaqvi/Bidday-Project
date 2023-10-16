import { IAuthPayload } from '@app/Modules/Authentication/Interfaces/IPayload.interface';
import { Request } from 'express';

export interface ExtendedRequest extends Request {
  user: IAuthPayload; 
}