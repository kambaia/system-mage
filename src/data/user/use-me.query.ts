import User from "@repositories/user";
import { useQuery } from "react-query";
import { IEmployee, Profile, IUser } from "@ts-types/generated";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { storage } from '../../../config/firebase';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { v4 as creadId } from 'uuid'
export const fetchMe = async (id: string) => {
	const { data } = await User.findOne(API_ENDPOINTS.EMPLOYEE, id);
	return data;
};

export const fetchUser = async (id: string) => {
	const { data } = await User.find(`${API_ENDPOINTS.USER}/${id}`);
	return data;
};

export const fetcUsers = async (id: string) => {
	const { data } = await User.find(`${API_ENDPOINTS.USERS}/${id}`);
	return data;
};


export const userQuery = (id: string) => {
	return useQuery<IUser, Error>([API_ENDPOINTS.USER, id], () =>
	fetchUser(id)
	);
};

export const userListQuery = (idUser: string | undefined) => {
	return useQuery<IUser[], Error>([API_ENDPOINTS.USERS], () => fetcUsers(idUser!));
};

export const useEmployeeMeQuery = (idUser: string | undefined) => {
	return useQuery<IEmployee, Error>([API_ENDPOINTS.USERS], () => fetchMe(idUser!));
};

export async function recoverUserInformation(id: string) {
	return await User.findOne(API_ENDPOINTS.ACCESS_USER, id);
}

export async function UploadImage(file: File) {
	if (["image/jpg", "image/jpeg", "image/webp", "image/svg+xml", "image/png"].includes(file.type)) {
		let rondomId = creadId()
		let newFile = ref(storage, `files/school/users/${rondomId}`)
		let upload = await uploadBytes(newFile, file);
		let img_url = await getDownloadURL(upload.ref);
		return {
			name: upload.ref.name,
			thumbnail: img_url
		} as Profile
	} else {
		return new Error("Tipo de arquivo não permitido")
	}
}
