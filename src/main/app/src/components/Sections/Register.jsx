import React, { useState,useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { TextField,Grid,Button,Typography, Link} from '@material-ui/core'
import step from "../../assets/img/4step.png";

import { useInRouterContext, useNavigate } from 'react-router-dom';
import UserServices from "../../services/UserServices";

 function Register(){
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
    if (!values.password) {
      errors.password = "Mot de passe requis!";
    } else if (values.password.length < 4) {
      errors.password = "Mot de passe doit contenir plus que 8 caracteres!";
    } 
    

    if (!values.confirmPassword) {
        errors.confirmPassword = "Confirmer votre mot de passe!";
      } else if(values.password !== values.confirmPassword) {
        errors.confirmPassword = "Les mots de passe ne correspondent pas!";
      } 
    return errors;
  };


  useEffect(() => {
    
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        const user ={firstName: formValues.firstName,lastName: formValues.lastName, email: formValues.email, password: formValues.password,};
        UserServices.createUser(user).then((response) => {
        
          if(response.data==true){
           
            setErrorMessage("Email existe dèja!")
          }
         else{
           navigate("/confirm")
         }
      })
       
    }
  }, [formErrors]);


return (
    <MDBContainer className="b">
      <MDBRow  className=" justify-content-center">
        <MDBCol md="4" className="c shadow-5" >
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
            <TextField id="standard-password-input" 
              fullWidth label="Mot de passe "
              name="password"
               type="password"
                placeholder='Votre mot de passe' 
                autoComplete="current-password" 
                  value={formValues.password} 
                 onChange={handleChange}
        />
        <p className="error">{formErrors.password}</p>
        <TextField id="standard-password-input1" 
        label="Confirmer votre mot de passe" 
        fullWidth  type="password" 
                 placeholder="Confirmer votre mot de passe" 
                 name="confirmPassword"
                 autoComplete="current-password" 
                 value={formValues.confirmPassword} 
                 onChange={handleChange} /> 
                  <p className="error">{formErrors.confirmPassword}</p>  
            </div>
            <div className="text-center">
              <Button type='submit'  fullWidth style={btnstyle}> S'inscrire </Button>
            </div>
            <br></br>
            <p className="error">{errorMessage}</p>
            <Typography style={text}>
              Avez-vous déja un compte?
              <Link href="#" style={link} onClick={(e) => redirect(e)}> Connectez-vous </Link>
            </Typography>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Register;
