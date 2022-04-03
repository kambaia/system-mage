import React, { useState} from 'react';
import axios from 'axios'
import { URL_CURSO, URL_CLASSE, URL_TURMA, URL_PROPINA, URL_DESCIMPLINA} from '../utils/endpoints';

// function InsertCurso(form) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const token = localStorage.getItem('app-token');
//             const url = URL_CURSO;
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

// function getCurso() {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const token = localStorage.getItem('app-token');
//             const url = URL_CURSO;
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
// function updateCurso(form) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const config = {
//                 method: 'post',
//                 url: URL_CURSO,
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
// function deliteCurso(form) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const config = {
//                 method: 'post',
//                 url: URL_CURSO,
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



// function InsertDisciplina(form) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const token = localStorage.getItem('app-token');
//             const url = URL_DESCIMPLINA;
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

// function getDisciplina() {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const token = localStorage.getItem('app-token');
//             const url = URL_DESCIMPLINA;
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
// function updateDisciplina(form) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const config = {
//                 method: 'post',
//                 url: URL_CURSO,
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
// function deliteDisciplina(form) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const config = {
//                 method: 'post',
//                 url: URL_CURSO,
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





// function InsertTurma(form) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const token = localStorage.getItem('app-token');
//             const url = URL_TURMA;
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

// function getTurma() {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const token = localStorage.getItem('app-token');
//             const url = URL_TURMA;
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
// function updateTurma(form) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const config = {
//                 method: 'post',
//                 url: URL_TURMA,
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
// function deliteTurma(form) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const config = {
//                 method: 'post',
//                 url: URL_TURMA,
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


// function InsertPropina(form) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const token = localStorage.getItem('app-token');
//             const url = URL_PROPINA;
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

// function getPropina() {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const token = localStorage.getItem('app-token');
//             const url = URL_PROPINA;
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
// function updatePropina(form) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const config = {
//                 method: 'post',
//                 url: URL_PROPINA,
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
// function delitePropina(form) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const config = {
//                 method: 'post',
//                 url: URL_PROPINA,
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



// function InsertClasse(form) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const token = localStorage.getItem('app-token');
//             const url = URL_CLASSE;
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

// function getOnlyClasse(id) {
//     console.log(id)
//     return new Promise(async function (resolve, reject) {
//         try {
//             const token = localStorage.getItem('app-token');
//             const url = id === undefined ? URL_CLASSE : `${URL_CLASSE}${id}`;
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
// function getClasse() {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const token = localStorage.getItem('app-token');
//             const url = URL_CLASSE;
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
// function updateClasse(form) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const config = {
//                 method: 'post',
//                 url: URL_CLASSE,
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
// function deliteClasse(form) {
//     return new Promise(async function (resolve, reject) {
//         try {
//             const config = {
//                 method: 'post',
//                 url: URL_CLASSE,
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
//     getCurso,
//     InsertCurso,
//     getDisciplina,
//     InsertDisciplina,
//     getTurma,
//     InsertTurma,
//     getPropina,
//     InsertPropina,
//     InsertClasse,
//     getClasse,
//     getOnlyClasse
// }