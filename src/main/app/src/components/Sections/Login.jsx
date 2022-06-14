import React,{ useState,useEffect } from "react";
import { useNavigate, useParams ,useLocation  } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol} from "mdb-react-ui-kit";
import { TextField,Grid,Button,Typography,Link} from '@material-ui/core'
import step from "../../assets/img/4step.png";
import '../../styles/SignUp.css';
import UserServices from "../../services/UserServices";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const btnstyle={borderRadius:  15, backgroundColor: "#0C6358", color:"white",  textTransform: 'none', marginTop:80, marginBottom:7};
  const link={color:"#0C6358"};
  const text={color:"#A6A6A6"};
  const navigate = useNavigate();
  const initialValues = {email: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit ,setIsSubmit] = useState(false);
  const { userToken } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  //ADD
     const { setAuth }= useAuth();
     const  location =useLocation();
     const from = location.state?.from?.pathname || "/";
  const redirect = (e) => {
    e.preventDefault();
    navigate("/register")

}

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
     setAuth({formValues});
     setIsSubmit(true);
  
     
  };
  useEffect(() => {
    
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const user ={email: formValues.email, password: formValues.password,};
      UserServices.confirmed(user).then((response) => {
        
        if(response.data==true){
         
         navigate(location.state?.from?.pathname);
    
        console.log(location.state?.from?.pathname);
        }
        else {
         
          setErrorMessage("Désolé, Email ou mot de passe incorrect. Veuillez réessayer ou créer un nouveau compte!");
        }
    })
    }
  }, [formErrors]);

  useEffect(() => {
    if (userToken) {
       UserServices.enableUer(userToken)
    }
}, [])
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   
     
    if (!values.email) {
      errors.email = "Email requis!";
    } else if (!regex.test(values.email)) {
      errors.email = "Email non valide!";
    }
    if (!values.password) {
      errors.password = "Mot de passe requis!";
    } 
    
    return errors;
  };

  return (
    <MDBContainer className="b m-5">
      <MDBRow  className=" justify-content-center">
        <MDBCol md="4" className=" c shadow-5" >
          <form className="a" method="POST" action="/login" >
            <Grid align='center'>
              <img src={step} className='picture'/>
            </Grid>            
            <div className="grey-text">
            <TextField  label="Adresse e-mail"
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
            </div>
            <div className="text-center">
              <Button type='submit'  fullWidth style={btnstyle}> Se Connecter </Button>
            </div>
            <p className="error">{errorMessage}</p>

            <Typography style={text}>
              N'avez-vous pas un compte?
              <Link href="#" style={link} onClick={(e) => redirect(e)}> Inscrivez-vous </Link>
            </Typography>

            
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
};

export default Login;