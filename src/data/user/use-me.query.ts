import User from "@repositories/user";
import { useQuery } from "react-query";
import {IUser, Roles } from "@ts-types/generated";
import { API_ENDPOINTS } from "@utils/api/endpoints";


export const fetchUser = async (id: string) => {
	const { data } = await User.find(`${API_ENDPOINTS.USER}/${id}`);
	return data;
};

export const fetcUsers = async (id: string) => {
	const { data } = await User.find(`${API_ENDPOINTS.USER_FOR_SCHOOL}/${id}`);
	const newdata = data.map((item: IUser) => {
		return {
			profile: item.profile?.thumbnail,
			firstName: item.fullName,
			unitel: item.phoneNumber,
			email:item.email,
			phoneNumber: item.phoneNumber,
			dateCreated: item.createdAt,
			permission: item.permission?.role,
			id:item._id
		}
	})
	return newdata;
};


export const userQuery = (id: string) => {
	return useQuery<IUser, Error>([API_ENDPOINTS.USER, id], () =>
		fetchUser(id)
	);
};
export const fetchRoles = async () => {
	const { data } = await User.find(API_ENDPOINTS.ROLE);
	const newData = data.map((items: Roles) => {
		return {
			value: items._id,
			label: items.role
		}
	})
	return [...newData];
};

export const userSchoolListQuery = (idUser: string | undefined) => {
	return useQuery<any, Error>([API_ENDPOINTS.USER_FOR_SCHOOL], () => fetcUsers(idUser!));
};

export async function recoverUserInformation(id: string) {
	return await User.findOne(`${API_ENDPOINTS.ACCESS_USER}/${id}`);
}

export const useRolesQuery = () => {
	return useQuery<any, Error>([API_ENDPOINTS.ROLE], () => fetchRoles());
};
