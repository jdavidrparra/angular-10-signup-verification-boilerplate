﻿import { Role } from './role';

export class Account {
    id: string;
    name: string;
    email: string;
    role: Role;
    jwtToken?: string;
}