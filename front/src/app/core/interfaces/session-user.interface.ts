import { User } from 'app/core/interfaces/user.interface';

export interface SessionUser {
    token: string,
    userInformation: User
}