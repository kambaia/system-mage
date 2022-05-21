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

export const useLoginMutation = () => {
	return useMutation(({ variables }: ILoginVariables) =>
	  User.login(API_ENDPOINTS.SESSION, variables)
	);
  };

  
export const useCreateUserMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(
    ({ variables }: IRegisterVariables) =>
      User.register(API_ENDPOINTS.USER, variables),
    {
      onSuccess: ({data}) => {
		 return data;
      },
      // Always refetch after error or success:
      onSettled: ({data}) => {
        queryClient.invalidateQueries(API_ENDPOINTS.USER);
      },
	  onError: ({ data})=>{
		  console.log(data)
		toast.error('Aconteceu um error ao registrar as informações');	
	  }
    }
  );
};
