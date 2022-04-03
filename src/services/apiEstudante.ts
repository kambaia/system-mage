import React, { useState} from 'react';
import axios from 'axios'
import {URL_Estudante, URL_MATRICULA} from '../utils/endpoints';

// function InsertEstudante(form:any) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const token = localStorage.getItem('app-token');
//             const url = URL_Estudante;
//             const config = {
//               method: 'post',
//               url,
//               headers: {
//                 'Authorization': 'Bearer ' + `${token}`
//               },
//               data: form
      
//             };
//             const response = await axios(config);
//             resolve(response.data);
           
//         } catch (error) {
//             console.log("ERRO: ", error)
//             reject(error)
//         }
//     })
// }
// function getOnlytEstudante(id) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const token = localStorage.getItem('app-token');
//             const url = id === undefined ? URL_Estudante : `${URL_Estudante}${id}`;
//             const config = {
//               method: 'get',
//               url,
//               headers: {
//                 'Authorization': 'Bearer ' + `${token}`
//               },
              
//             };
//             const response = await axios(config);
//             resolve(response.data);
           
//         } catch (error) {
//             console.log("ERRO: ", error)
//             reject(error)
//         }
//     })
// }
// function getEstudante() {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const token = localStorage.getItem('app-token');
//             const url = URL_Estudante;
//             const config = {
//               method: 'get',
//               url,
//               headers: {
//                 'Authorization': 'Bearer ' + `${token}`
//               },
              
//             };
//             const response = await axios(config);
//             resolve(response.data);
           
//         } catch (error) {
//             console.log("ERRO: ", error)
//             reject(error)
//         }
//     })
// }
// function updateEstudante(form) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const config = {
//                 method: 'post',
//                 url: URL_Estudante,
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
// function deliteEstudante(form) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const config = {
//                 method: 'post',
//                 url: URL_Estudante,
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



// function InsertMatricula(form) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const token = localStorage.getItem('app-token');
//             const url = URL_MATRICULA;
//             const config = {
//               method: 'post',
//               url,
//               headers: {
//                 'Authorization': 'Bearer ' + `${token}`
//               },
//               data: form
      
//             };
//             const response = await axios(config);
//             resolve(response);
           
//         } catch (error) {
//             console.log("ERRO: ", error)
//             reject(error)
//         }
//     })
// }

// function getMatricula() {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const token = localStorage.getItem('app-token');
//             const url = URL_MATRICULA;
//             const config = {
//               method: 'get',
//               url,
//               headers: {
//                 'Authorization': 'Bearer ' + `${token}`
//               },
              
//             };
//             const response = await axios(config);
//             resolve(response.data);
           
//         } catch (error) {
//             console.log("ERRO: ", error)
//             reject(error)
//         }
//     })
// }
// function updateMatricula(form) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const config = {
//                 method: 'post',
//                 url: URL_MATRICULA,
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
// function deliteMatricula(form) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const config = {
//                 method: 'post',
//                 url: URL_MATRICULA,
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



// export {
//     getEstudante,
//     getMatricula,
//     InsertEstudante,
//     InsertMatricula,
//     updateEstudante,
//     updateMatricula,
//     deliteEstudante,
//     deliteMatricula,
//     getOnlytEstudante
//    }
   