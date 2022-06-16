import axios from "axios";
const EMPLOYE_BASE_REST_API_URL_PROFILE = "http://localhost:8040/current-user";
const EMPLOYE_BASE_REST_API_URL_PROFILE_UPDATE =
  "http://localhost:8040/edit-user";

class ProfileService {
  getUserInfo() {
    return axios.get(EMPLOYE_BASE_REST_API_URL_PROFILE);
  }

  getUserById(userId) {
    return axios.get(EMPLOYE_BASE_REST_API_URL_PROFILE_UPDATE + "/" + userId);
  }
  /*
  updateEmployee(employeeId, employee) {
    return axios.put(EMPLOYE_BASE_REST_API_URL + `/${employeeId}`, employee);
  }
  
  */
  updateUser(userId, appuser) {
    return axios.put(
      EMPLOYE_BASE_REST_API_URL_PROFILE_UPDATE + "/" + userId,
      appuser
    );
  }
}
export default new ProfileService();
