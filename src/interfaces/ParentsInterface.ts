import { Address, IUser } from "./UserInterface"
export interface IParents {
	_id?: string;
	parentPhoto: string;
	parentCover: string;
	parentName: string;
	parentIdentity: string;
	birthDate: string;
	students: Array<IUser["_id"]>;
	parentRepresentative: IUser;
	adress: Address;
	createdAt: Date;
	updatedAt: Date;
}