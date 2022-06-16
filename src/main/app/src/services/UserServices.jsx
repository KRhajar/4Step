import axios from 'axios'


const url = "http://localhost:8040/api/v1/registration"
const url2 = "http://localhost:8040/coach/create"

const url1 = "http://localhost:8040/api/v1/appUser/coach"

class UserServices {
    
    createUser(user) {
        return axios.post(url, user);
    }
    confirmed(user) {
        return axios.post("http://localhost:8040/api/login/validate",user);
    } 

   
    
    createCoach(coach) {
        return axios.post(url2, coach);
    }
    enableUer(userToken) {
        return axios.post(url + "/" + userToken);
    }

    getEntreprenneurById(employeeId) {
        return axios.get("http://localhost:8040/api/v1/registration/pro" + "/" + employeeId);
    }
    getCoach(){
        return axios.get(url1);
    }
   
    
}
export default new UserServices();