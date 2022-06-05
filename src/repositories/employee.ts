import { IEmployee } from "@ts-types/generated";
import Base from "./base";
class Employee extends Base<IEmployee, IEmployee> {
  fetchParent = async (url: string) => {
    return this.http(url, "get");
  };
}

export default new Employee();
