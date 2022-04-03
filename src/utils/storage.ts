import { IUser } from "../interfaces/UserInterface";

export function setUserLocalStorage(token: string | null, user: IUser | null, accessSchools:any) {
  localStorage.setItem("us", JSON.stringify(user));
  localStorage.setItem("access-token", token!);
  localStorage.setItem("access_school", JSON.stringify(accessSchools));
}

export function getUserLocalStorage() {
  const userJson = localStorage.getItem("us");
  const accessToken = localStorage.getItem("access-token");
  const access_school= localStorage.getItem("access_school");

  if (!userJson && accessToken) {
    return {user:  null, token:null };
  }
  const user = JSON.parse(userJson!);
  const userSchool = JSON.parse(access_school!);

  return {user: user ?? null, token: accessToken??null, userSchool: userSchool?? null};
}
