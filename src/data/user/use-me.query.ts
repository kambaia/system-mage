import User from "@repositories/user";
import { useQuery } from "react-query";
import {IEmployee,  Profile } from "@ts-types/generated";
import { API_ENDPOINTS } from "@utils/api/endpoints";
import { storage } from '../../../config/firebase';
import { ref, listAll, getDownloadURL, uploadBytes} from 'firebase/storage';
import { v4 as creadId } from 'uuid'
export const fetchMe = async (id: string) => {
  const { data } = await User.findOne(API_ENDPOINTS.EMPLOYEE, id);
  return data;
};

export const useMeQuery = (idUser:string | undefined) => {
  return useQuery<IEmployee, Error>([API_ENDPOINTS.USER], () => fetchMe(idUser!));
};


const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))
export async function recoverUserInformation(id:string) {
  await delay()
  return await User.findOne(API_ENDPOINTS.USER, id);
}

export async function UploadImage(file:File) {
   if(["image/jpg", "image/jpeg", "image/webp","image/svg+xml","image/png"].includes(file.type)){
      let rondomId = creadId()
    let newFile =  ref(storage, `files/school/users/${rondomId}`)
    let upload = await uploadBytes(newFile, file);
    let img_url = await getDownloadURL(upload.ref);
    return  {
      name: upload.ref.name,
      thumbnail: img_url
    } as Profile
   }else{
     return new Error("Tipo de arquivo não permitido")
   }
}