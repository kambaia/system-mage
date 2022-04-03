import { Address, Contact, IUser } from "./UserInterface"
export interface ISchool{
   _id:String;
   schoolCode: string;
   schoolPhoto: string;
   schoolCover:string;
   schoolName:string;
   schoolIdentity:string;
   fundationDate: string;
   adress?: Address;
   contact?: Contact;
   shoolRepresentative:IUser;
   definitionsSchool: IdefinitionsSchool
   createdAt: Date;
   updatedAt: Date;
   
}

export interface IdefinitionsSchool extends Document{
	colorSchool:string
}