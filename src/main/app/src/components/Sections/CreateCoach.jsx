import React, { useState,useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { TextField,Grid,Button,Typography, Link} from '@material-ui/core'
import step from "../../assets/img/4step.png";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { useInRouterContext, useNavigate } from 'react-router-dom';
import UserServices from "../../services/UserServices";
import ConfirmCoach from './EmailConfirmation';

 export default function CreateCoach(){
  const btnstyle={borderRadius:  15, backgroundColor: "#0C6358", color:"white",  textTransform: 'none'};
  const link={color:"#0C6358"};
  const text={color:"#A6A6A6"};
  const navigate = useNavigate();
  const initialValues = {firstName: "",lastName: "", email: "", password: "", confirmPassword: "",};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  
  const redirect = (e) => {
    e.preventDefault();
    navigate("/login")

}
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   
    if (!values.firstName) {
        errors.firstName = "Champs requis!";
      }
    if (!values.lastName) {
        errors.lastName = "Champs requis!";
      }  
    if (!values.email) {
      errors.email = "Email requis!";
    } else if (!regex.test(values.email)) {
      errors.email = "Email non valide!";
    }
    return errors;
  };


  useEffect(() => {
    
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        const user ={firstName: formValues.firstName,lastName: formValues.lastName, email: formValues.email,};
        UserServices.createCoach
        (user).then((response) => {
        
         
            if(response.data==true){
           
                setErrorMessage("Email existe dèja!")
              }
             else{
               setErrorMessage("")
               setCoach("Coach crée")
             }
         
      })
       
    }
  }, [formErrors]);

  const [coach, setCoach] = React.useState(false);
  const handleToClose = () => {
    
    setCoach(false);
  };
return (
    <div>    <MDBContainer className=" m ">
      <MDBRow  className=" justify-content-center ">
        <MDBCol  className="c shadow-5" >
          <form className="a" onSubmit={handleSubmit}>
            <Grid align='center'>
              <img src={step} className='picture'/>
            </Grid>            
            <div className="grey-text">
            <TextField
             label="Prènom"
              placeholder='Votre prènom' 
               fullWidth 
              value={formValues.firstName} 
              name="firstName"
              onChange={handleChange}/>
            <p className="error">{formErrors.firstName}</p>
            <TextField
             label="Nom"
              placeholder='Votre nom' 
               fullWidth 
              value={formValues.lastName} 
              name="lastName"
              
              onChange={handleChange}/>
            <p className="error">{formErrors.lastName}</p>
            <TextField
             label="Adresse e-mail"
              placeholder='Votre adresse e-mail' 
               fullWidth 
              value={formValues.email} 
              name="email"
              onChange={handleChange}/>
            <p className="error">{formErrors.email}</p>
            
      
            </div>
            <div className="text-center mt-5">
              <Button type='submit'  fullWidth style={btnstyle}> Ajouter un coach </Button>
            </div>
            <br></br>
            <p className="error">{errorMessage}</p>
            <p className="error">{coach}</p>
          
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
          </div>
  );
};

