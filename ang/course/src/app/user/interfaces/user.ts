export interface User{
    id:number;
    firstname: string;
    lastname: string;
    age: number;
    company: string;
    department: string;
    email: string;
    gender: string;
    active: boolean;
}

export interface UserDTO extends User{
    name: string;
    data: any[];
}