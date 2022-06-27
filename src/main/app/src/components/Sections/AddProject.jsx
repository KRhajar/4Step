import React,{useState , useEffect} from 'react'
import { MDBCard,MDBContainer, MDBCardBody, MDBCardTitle, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {TextField,Button} from '@material-ui/core'
import backlog from "../../assets/img/backlog.webp.jpeg" 
import ProjectService from '../../services/ProjectService';
import { Navigate } from 'react-router-dom';
const AddProject = () => {
    const btnstyle={borderRadius:  15, backgroundColor: "#0C6358", color:"white",  textTransform: 'none',};
    const initialValues = {projetName:"", projetIdentifier :"", projetDescription: "", start_date:"", end_date:"",user:""};
    const [projectValues, setProjectValues] = useState(initialValues);
    const [projectErrors, setProjectErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


     // Handle fields change
     const handleChange = (e) => {
      const {name,value} = e.target;
      setProjectValues({...projectValues, [name]:value});
      console.log(projectValues);
  };

  useEffect(() => {
    if(Object.keys(projectErrors).length === 0 && isSubmit){
        ProjectService.curretuser().then((Response) => {
        projectValues.user = Response.data.id
        setProjectValues(Response.data)
        console.log(Response.data.id)
        ProjectService.createProject(projectValues)
        console.log(projectValues);
      });
            }
}, [projectErrors])

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjectErrors(validate(projectValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {}
    if(!values.projetName){
        errors.projetName = "Ce champ est obligatoire";
    }
    if(!values.projetDescription) {
        errors.projetDescription = "Ce champ est obligatoire";
    }
    if(!values.projetIdentifier) {
        errors.projetIdentifier = "Ce champ est obligatoire";
    }
    if(!values.start_date) {
        errors.start_date= "Ce champ est obligatoire";
    }
    if(!values.end_date) {
        errors.end_date = "Ce champ est obligatoire";
    }
    return errors;
};

  return (
    <div>
    <MDBContainer className='p-5 mt-0'>
    <MDBRow>
        <MDBCol>
          <MDBCard alignment='center'> 
            <MDBCardBody onSubmit={handleSubmit} >
              <MDBCardTitle className='font-weight-bold h4' style={{ color:'#2A5298'}}>Créer un nouveau projet</MDBCardTitle>
              <form onSubmit={handleSubmit}>
              <div>
                <TextField id="standard-basic" label="Nom du projet" variant="standard" className='w-75' defaultValue={projectValues.projetName} onChange={handleChange} name="projetName"/>
                <p style={{ color:'red' }}>{projectErrors.projetName}</p>
              </div>
              <div>
                <TextField id="standard-basic" label="Id unique du projet" variant="standard" className='w-75' defaultValue={projectValues.projetIdentifier} onChange={handleChange} name="projetIdentifier"/>
                <p style={{ color:'red' }}>{projectErrors.projetIdentifier}</p>
              </div>
              <div>
                <TextField id="standard-basic" label="Description" multiline rows={2} maxRows={4} className='w-75' defaultValue={projectValues.projetDescription} onChange={handleChange} name="projetDescription" />
                <p style={{ color:'red' }}>{projectErrors.projetDescription}</p>
              </div>
              <div>
                <TextField id="date" label="date de début" type="date" InputLabelProps={{ shrink: true,}} className='mt-4 w-75' defaultValue={projectValues.start_date} onChange={handleChange} name="start_date"/>
                <p style={{ color:'red' }}>{projectErrors.start_date}</p>
              </div>
              <div>
                <TextField id="date" label="date de fin" type="date" InputLabelProps={{ shrink: true,}} className='mt-4 w-75' defaultValue={projectValues.end_date} onChange={handleChange} name="end_date"/>
                <p style={{ color:'red' }}>{projectErrors.end_date}</p>
              </div>
              <div className="text-center mb-3">
                    <Button className='w-25 mt-5' type='submit' style={btnstyle}> 
                    <a href='rrr'   target="blank"> Suivant</a>
                    
                    </Button>
              </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol>
            <div size='md' className='col-example text-center'>
            <img src={backlog} alt='' className='img-fluid mt-5 mb-5' />
            </div>
        </MDBCol> 

    </MDBRow>     
    </MDBContainer>
    </div>
  )
}

export default AddProject