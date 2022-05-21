import { ISchool } from './SchoolInterface';
export enum Gender {
	masculino = 'Masculino',
	femenino = 'Femenino',
	undisclosed = 'undisclosed'
}

export interface Address extends Document {
	street: string;
	city: string;
	postCode: string;
}
export interface Contact extends Document {
	unitel:string;
	movicel:string;
	fixe:string;
}
export interface Iaccess_level extends Document {
	_id: string;
	livel: number;
	role:string;
    type:string;
	createdAt: Date;
	updatedAt: Date;
}

export interface ILoggedUser{
	expireIn: number;
	token: string
}
