import { RegisterInput } from "@ts-types/generated";
import { ROUTES } from "@utils/routes";
import User from "@repositories/user";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import toast from "react-hot-toast";

export interface IRegisterVariables {
  variables: RegisterInput;
}

export const useCreateUserMutation = () => {
  const queryClient = useQueryClient();


  return useMutation(
    ({ variables }: IRegisterVariables) =>
      User.register(API_ENDPOINTS.USER, variables),
    {
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.USER);
      },
	  onError: ()=>{
		toast.error('Aconteceu um error ao registrar as informações');	
	  }
    }
  );
};
