export interface UserDTO{
    results: UserModel[];
    info:{
        page:number;
        results: number;
        seed:number;
        version: string;
    }
}

export interface UserModel{
    firstName: string;
    lastName: string;
}