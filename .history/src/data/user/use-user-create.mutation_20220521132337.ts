import { RegisterInput } from "@ts-types/generated";
import { ROUTES } from "@utils/routes";
import User from "@repositories/user";
import { Router, useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import toast from "react-hot-toast";

export interface IRegisterVariables {
	variables: RegisterInput;
}

export const useCreateUserMutation = () => {
	return useMutation(({ variables }: ILoginVariables) =>
	   User.register(API_ENDPOINTS.USER, variables),
	);
};

