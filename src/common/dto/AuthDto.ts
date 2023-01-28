import { User } from '../interfaces/User/UserModel';

export interface AuthDto {
  success: boolean;
  message?: string;
  userId: string | any;
  user?: User | null;
}
