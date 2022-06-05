import { IEmployee } from "@ts-types/generated";
import { useMutation, useQueryClient } from "react-query";
import employee from '@repositories/employee';
import { API_ENDPOINTS } from "@utils/api/endpoints";
export interface IRegisterVariables {
    variables: IEmployee;
  }
  
  export const useCreateEmployeeMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(
      ({ variables }: IRegisterVariables) =>
      employee.create(API_ENDPOINTS.EMPLOYEE, variables),
      {
        onSettled: () => {
          // Always refetch after error or success:
          queryClient.invalidateQueries(API_ENDPOINTS.EMPLOYEE);
        }
      }
    );
  };