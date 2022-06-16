import axios from 'axios'; 

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8040/api/v1/registration/save';
const EMPLOYEE_BASE_REST_API_URL_2 = 'http://localhost:8040/api/v1/registration/entrepreneur';

class FormService{

    createFormulaire(formulaire){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, formulaire);
    }
    getAllInformations(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL_2);
    }
    updateForm(entrepreneurId, entrepreneur) {
        return axios.put("http://localhost:8040/api/v1/registration" + "/" + entrepreneurId, entrepreneur)


    }
    affecter(projectId, entrepreneur) {
        return axios.put("http://localhost:8040/api/v1/registration/affectation" + "/" + projectId, entrepreneur)


    }
}
export default new FormService();