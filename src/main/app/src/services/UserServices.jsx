import axios from 'axios'


const url = "http://localhost:8040/api/v1/registration"

class UserServices {
    
    createUser(user) {
        return axios.post(url, user);
    }
    confirmed(user) {
        return axios.post("http://localhost:8040/api/login/validate",user);
    } 

   
    
    enableUer(userToken) {
        return axios.post(url + "/" + userToken);
    }

    getEntreprenneurById(employeeId) {
        return axios.get("http://localhost:8040/api/v1/registration/pro" + "/" + employeeId);
    }
    
}
export default new UserServices();