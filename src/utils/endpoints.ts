const URL_BASE = "https://pia-rest.herokuapp.com/api";
//const URL_BASE = "http://localhost:8000/api";

const URL_ROLES= `${URL_BASE}/roles`;
const URL_USER = `${URL_BASE}/user`;
const URL_USERS = `${URL_BASE}/users`;  
const URL_ACESS_SCHOOL=  `${URL_BASE}/school_access`;
const URL_ACESS = `${URL_BASE}/session_school`;
const URL_ACESS_STUDENT= `${URL_BASE}/auth_students`

const URL_ENCARREGADOS=  `${URL_BASE}/encarregados`; 
const URL_ENCARREGADO =  `${URL_BASE}/encarregado/`; 
const URL_COLEGIOS =  `${URL_BASE}/colegios`; 
const URL_PAGAMENTOS = `${URL_BASE}/listar-pagamentos`; 

/*configurações do sistema */
const URL_PROPINA = `${URL_BASE}/propina/`;
const URL_CURSO = `${URL_BASE}/curso/`;
const URL_CLASSE = `${URL_BASE}/classe/`;
const URL_TURMA  =`${URL_BASE}/turma/`;
const URL_DESCIMPLINA = `${URL_BASE}/disciplina/`;

/*********Estudantes //////////// */
const URL_Estudante = `${URL_BASE}/estudante/`;
const URL_MATRICULA = `${URL_BASE}/matricula/`;


export {
    URL_ROLES,
    URL_ACESS,
    URL_ACESS_SCHOOL,
    URL_USER,
    URL_COLEGIOS,
    URL_ENCARREGADOS,
    URL_ENCARREGADO,
    URL_MATRICULA,
    URL_PAGAMENTOS,
    URL_CLASSE,
    URL_TURMA,
    URL_PROPINA,
    URL_DESCIMPLINA,
    URL_CURSO,
    URL_Estudante,
    URL_ACESS_STUDENT
}