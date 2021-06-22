import { Role } from './role';

export class Account {
    id: string;
    name: string;
    email: string;
    role: Role;
    jwtToken?: string;
}


export class ResponseBase<T> {
    responseTime: any;
    code:number;
    message:string;
    data: T; 
    count:number; 
}