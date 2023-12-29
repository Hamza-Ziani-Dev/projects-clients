import { Coordinate } from "./Coordinate.interface";

export interface User{
    uuid :string;
    firstName : string,
    lastName : string,
    email : string,
    userName : string,
    gender : string,
    address: string,
    dateOfBith :string,
    phone : string,
    imageUrl : string,
    coordinate : Coordinate,
}