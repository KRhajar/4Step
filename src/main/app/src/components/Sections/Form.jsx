import React,{useState , useEffect} from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import {TextField,Button} from '@material-ui/core'
import FormService from "../../services/FormService";
 
const Formulaire = () => {
    const btnstyle={borderRadius:  15, backgroundColor: "#0C6358", color:"white",  textTransform: 'none', width:200, marginTop:50};
    const initialValues = {email :"", intitlule :"", description: "", nom_prenom:"", ville:"", telephone:"", diplome:"", nom_autre_membre:"", Domaine:""};
    const [formValues, setformValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name,value} = e.target;
        setformValues({...formValues, [name]:value});
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
            FormService.createFormulaire(formValues)
                }
    }, [formErrors])

    const validate = (values) => {
        const errors = {}
        const regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        const regex2 = /(\+212|0)([ \-/])(\d[ \-/]){9}/; 
        if(!values.nom_prenom){
            errors.nom_prenom = "Ce champ est obligatoire";
        }
        if(!values.telephone) {
            errors.telephone = "Ce champ est obligatoire";
        } 
        if(!values.ville) {
            errors.ville = "Ce champ est obligatoire";
        }
        if(!values.email) {
            errors.email = "Ce champ est obligatoire";
        } else if (!regex.test(values.email)){
            errors.email = "Le format d'e-mail n'est pas valide";
        }
        if(!values.diplome) {
            errors.diplome = "Ce champ est obligatoire";
        }
        if(!values.intitlule) {
            errors.intitlule = "Ce champ est obligatoire";
        }
        if(!values.description) {
            errors.description = "Ce champ est obligatoire";
        }
        if(!values.Domaine) {
            errors.Domaine = "Ce champ est obligatoire";
        }
        return errors;
    };

  return (
    <div>
       
        <MDBContainer>
        <form onSubmit={handleSubmit}>
            <MDBRow className=" justify-content-center offset-md-0 abc shadow-5">
                <MDBCol md="6" onSubmit={handleSubmit} >
                    <div>
                        <h3 className='txt'>Informations personnelles</h3>
                        <TextField id="standard-basic" name='nom_prenom' value={formValues.nom_prenom} onChange={handleChange} label="Nom et Prénom" fullWidth /> <br></br>
                        <p>{formErrors.nom_prenom}</p>
                        <TextField id="standard-basic" name='nom_autre_membre' value={formValues.nom_autre_membre} onChange={handleChange} label="Noms + Prénoms autres membres du groupe" fullWidth />
                        <p></p>
                        <TextField id="standard-basic" name='telephone' value={formValues.telephone} onChange={handleChange} label="Télephone portable"  fullWidth />   
                        <p>{formErrors.telephone}</p>
                        <TextField id="standard-basic" name='ville' value={formValues.ville} onChange={handleChange} label="Ville"  fullWidth />          
                        <p>{formErrors.ville}</p>
                        <TextField id="standard-basic" name='email' value={formValues.email} onChange={handleChange} label="Email"  fullWidth />          
                        <p>{formErrors.email}</p>
                        <TextField id="standard-basic" name='diplome' value={formValues.diplome} onChange={handleChange} label="Diplôme" fullWidth />          
                        <p>{formErrors.diplome}</p>
                    </div>
                </MDBCol>
                <MDBCol md="6  ">
                    <div>
                        <h3 className='txt'>Informations sur le projet</h3>  
                        <TextField id="standard-basic" name='intitlule' value={formValues.intitlule} onChange={handleChange} label="Intitule du projet"  fullWidth />          
                        <p>{formErrors.intitlule}</p>
                        <TextField id="standard-basic" name="description" value={formValues.description} onChange={handleChange} label="Brève description de l’idée de l’entreprise"  fullWidth />          
                        <p>{formErrors.description}</p>
                        <TextField id="standard-basic" name="Domaine" value={formValues.Domaine} onChange={handleChange} label="Domaine du projet de l'entreprise"  fullWidth />  
                        <p>{formErrors.Domaine}</p>
                    </div>
                </MDBCol>
                <div className="text-center">
                    <Button type='submit'  style={btnstyle}  > Suivant </Button>
                </div>
                <br></br><br></br><br></br><br></br>
            </MDBRow>
            </form>
        </MDBContainer>
    </div>
  )
}
export default Formulaire;