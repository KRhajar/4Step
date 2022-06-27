import axios from 'axios';

const Project_BASE_REST_API_URL = 'http://localhost:8040/api/project/addPoject';
const Project_BASE_REST_API_URL1 = 'http://localhost:8040/api/project/All';
const Project_BASE_REST_API_URL2 = 'http://localhost:8040/current-user';
const Project_BASE_REST_API_URL3 = 'http://localhost:8040/api/project';
const Project_BASE_REST_API_URL4 = 'http://localhost:8040/api/project/deleteProject';



class ProjectService{

    createProject(project){
        return axios.post(Project_BASE_REST_API_URL, project);
    }
    getAllProject(){
        return axios.get(Project_BASE_REST_API_URL1);
    }
    curretuser(){
        return axios.get(Project_BASE_REST_API_URL2);
    }
    getAllProjectsByUser(user){
        return axios.get(Project_BASE_REST_API_URL3 + '/user/' +user);
    }
    deleteProjectById(id){
        return axios.delete(Project_BASE_REST_API_URL4+ '/' / + id);
    }
}
export default new ProjectService;