import axios, { AxiosRequestConfig } from 'axios';
import { URL_ACESS, URL_ACESS_SCHOOL } from "../utils/endpoints";
import { http } from "../helper/http";
export function signInRequest(email: string, password: string) {
  return new Promise(async function (resolve, reject) {
    try {
      const config: AxiosRequestConfig = {
        method: "post",
        url: URL_ACESS,
        headers: {
          "Content-Type": "application/json",
        },
        data: { email, password },
      };
      const response = await http(config);
      resolve(response.data);
    } catch (error) {
      console.log("ERRO: ", error);
      reject(error);
    }
  });
}

export function getOnlyAccessUser(id:string | undefined) {
  return new Promise(async function (resolve, reject) {
    try {
      const token = localStorage.getItem("app-token");
      console.log(`${URL_ACESS_SCHOOL}/${id}`);
      const url = `${URL_ACESS_SCHOOL}/${id}`;
      const config:AxiosRequestConfig = {
        method: "get",
        url
      };
      const response = await axios(config);
      resolve(response.data);
    } catch (error) {
      console.log("ERRO: ", error);
      reject(error);
    }
  });
}

// function SigUpUser(form) {
//     console.log(form);
//     return new Promise(async function (resolve, reject) {
//         try {
//             const config = {
//                 method: 'post',
//                 url: URL_REGISTER,
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 data: form
//             };

//             const response = await axios(config);
//             resolve(response.data);

//         } catch (error) {
//             console.log("ERRO: ", error)
//             reject(error)
//         }
//     })
// }
// function handleAskForPassword(username) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const data='';
//             const config = {
//                 method: 'post',
//                 url: 'http://10.137.10.100:8000/api/askpass',
//                 headers: { },
//                 data: data
//             };
//             const response = await axios(config);
//             console.log(response.data);
//             resolve("HERE => ", response);

//         } catch (error) {

//             console.log("ERRO: ", error)
//             reject(error)
//         }
//     })
// }
// export {
//     SigInUser,
//     SigUpUser
// }
