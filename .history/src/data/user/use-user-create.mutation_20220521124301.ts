import { RegisterInput } from "@ts-types/generated";
import { ROUTES } from "@utils/routes";
import User from "@repositories/user";
import { Router, useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { API_ENDPOINTS } from "@utils/api/endpoints";

export interface IRegisterVariables {
  variables: RegisterInput;
}

export const useCreateUserMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(
    ({ variables }: IRegisterVariables, e) =>
      User.register(API_ENDPOINTS.USER, variables),
    {
      onSuccess: () => {
        //router.push(`${ROUTES.USER}/1`);
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.USER);
      },
	  onError: ()=>{

	  }
    }
  );
};
