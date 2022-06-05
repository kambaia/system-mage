import employee from '@repositories/employee';
import { IEmployee } from "@ts-types/generated";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { useQuery } from "react-query";


export const fetcEmployee = async (id: string) => {
	const { data } = await employee.find(`${API_ENDPOINTS.EMPLOYEE}/school/${id}`);
	return data;
};


export const allEmployQuery = (id: string) => {
	return useQuery<IEmployee[], Error>([API_ENDPOINTS.EMPLOYEE, id], () =>
	fetcEmployee(id)
	);
};
