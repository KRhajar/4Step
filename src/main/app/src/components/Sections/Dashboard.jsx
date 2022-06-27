import React,{useState , useEffect} from 'react'
import {Button} from '@material-ui/core'
import { useNavigate } from "react-router-dom";
import ProjectService from '../../services/ProjectService';
import { MDBCard,MDBContainer, MDBCardBody, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Dashboard = () => {
    const btnstyle={borderRadius:  15, color:"black", border: "solid orange",  textTransform: 'none',};
    const color = {color:"orange",} ;
    let navigate = useNavigate(); 
    const[project, setProject] = useState([]);

    const goTo=()=> {
      let path = '/AddProject'; 
      navigate(path);
    }

    useEffect(() => {      
      ProjectService.curretuser().then((Response) => {
      console.log(Response.data.id)
      var user = Response.data.id
      ProjectService.getAllProjectsByUser(user).then((Response) => {
      console.log(Response.data)
      setProject(Response.data)
      })
    }).catch(error => {
               console.log(error);
           });
  } , [])

  const getProjectsByUser = () => {
    ProjectService.getAllProjectsByUser().then((Response) => {
        setProject(Response.data)
        console.log(Response.data)
    }).catch(error => {
        console.log(error);
    })
}

  const deleteProjectById = (id) => {
    ProjectService.deleteProjectById(id).then((Response) => {
      console.log(Response.data)
    }
    )
        }

    return (
      <div>
  
      <div className="text-center mt-3 "> 
        <Button type='submit' style={btnstyle} onClick={goTo}  > 
          <i className={"fas fa-plus-circle"} style={color} /> &nbsp;Créer un nouveau projet 
        </Button>
      </div>
      <h3 align="center"> Projet Dashboard</h3>
      <hr align="center"/>

      
      <div>
        {
                  project.map((pro) => (
                 <MDBContainer className='p-5' key={pro.id}>
                 <MDBCard alignment='center'> 
                     <MDBCardBody>
                         <MDBRow>
                           <MDBCol className="col-sm">
                                L'identifiant du projet : {pro.projetIdentifier} <br/>
                                Date de début : {pro.start_date} <br/>
                                Date de fin {pro.end_date} :
                             </MDBCol>
                             <MDBCol className="col-sm">
                                 name :{pro.projetName} <br/>
                                description : {pro.projetDescription} <br/>
                             </MDBCol>
                             <MDBCol className="col-sm">
                                 <Button>Backlog</Button>
                                 <Button>Modifier les informations</Button>
                                 <Button onClick={()=> deleteProjectById(pro.id)}>Supprimer ce projet</Button>
                            </MDBCol>
                        </MDBRow>  
                 </MDBCardBody>
                 </MDBCard>
             </MDBContainer>
              ))
                  }
    </div>
      </div>
    )
}

export default Dashboard