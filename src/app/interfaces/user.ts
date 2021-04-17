import { Role } from "./role";

export interface User {
    id: number;

    first_name: string;

    last_name: string;

    mail: string;

    password: string;

    role : Role;
}
