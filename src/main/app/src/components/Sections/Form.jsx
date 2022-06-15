import React,{useState , useEffect} from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import {TextField,Button} from '@material-ui/core'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const Form = (props) => {
    const btnstyle={borderRadius:  15, backgroundColor: "#0C6358", color:"white",  textTransform: 'none', width:200, marginTop:50};
    const {formValues, handleChange} = props;
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(props.formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
            props.nextStep()
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
    <div className="mt-4 mb-4">
        <MDBContainer>
        <form onSubmit={handleSubmit}>
            <MDBRow className="justify-content-center offset-md-0 abc shadow-5">
                <MDBCol md="6" onSubmit={handleSubmit} >
                    <div>
                        <h3 className='txt'>Informations personnelles</h3>
                        <TextField id="standard-basic" name='nom_prenom' defaultValue={formValues.nom_prenom}  onChange={handleChange} label="Nom et Prénom" fullWidth /> <br></br>
                        <p style={{ color:'red' }}>{formErrors.nom_prenom}</p>
                        <TextField id="standard-basic" name='nom_autre_membre' defaultValue={formValues.nom_autre_membre} onChange={handleChange} label="Noms + Prénoms autres membres du groupe" fullWidth />
                        <p style={{ color:'red' }}>{formErrors.nom_autre_membre}</p>
                        <TextField id="standard-basic" name='telephone' defaultValue={formValues.telephone} onChange={handleChange} label="Télephone portable"  fullWidth />   
                        <p style={{ color:'red' }}>{formErrors.telephone}</p>
                        <TextField id="standard-basic" name='ville' defaultValue={formValues.ville} onChange={handleChange} label="Ville"  fullWidth />          
                        <p style={{ color:'red' }}>{formErrors.ville}</p>
                        <TextField id="standard-basic" name='email' defaultValue={formValues.email} onChange={handleChange} label="Email"  fullWidth />          
                        <p style={{ color:'red' }}>{formErrors.email}</p>
                        <TextField id="standard-basic" name='diplome' defaultValue={formValues.diplome} onChange={handleChange} label="Diplôme" fullWidth />          
                        <p style={{ color:'red' }}>{formErrors.diplome}</p>
                    </div>
                </MDBCol>
                <MDBCol md="6">
                    <div>
                        <h3 className='txt'>Informations sur le projet</h3>  
                        <TextField id="standard-basic" name='intitlule' defaultValue={formValues.intitlule} onChange={handleChange} label="Intitule du projet"  fullWidth />          
                        <p style={{ color:'red' }}>{formErrors.intitlule}</p>
                        <TextField id="standard-basic" name="description" defaultValue={formValues.description} onChange={handleChange} label="Brève description de l’idée de l’entreprise"  fullWidth />          
                        <p style={{ color:'red' }}>{formErrors.description}</p>
                        {/* <TextField id="standard-basic" name="Domaine" defaultValue={formValues.Domaine} onChange={handleChange} label="Domaine du projet de l'entreprise"  fullWidth />   */}
                        <FormControl variant="standard" fullWidth>
                            <InputLabel  id="demo-simple-select-standard-label">Domaine du projet de l'entreprise</InputLabel>
                            <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            name="Domaine"
                            value={formValues.Domaine}
                            onChange={handleChange}
                            label="Domaine du projet de l'entreprise"
                            fullWidth
                            >
                            <MenuItem value={"Numérique et intelligence artificielle"}>Numérique et intelligence artificielle</MenuItem>
                            <MenuItem value={"Energies renouvelables et efficacité énergétique"}>Energies renouvelables et efficacité énergétique</MenuItem>
                            <MenuItem value={"Systèmes automatisés"}>Systèmes automatisés</MenuItem>
                            <MenuItem value={"Eau et environnement"}>Eau et environnement</MenuItem>
                            <MenuItem value={"Industrie alimentairet"}>Industrie alimentairet</MenuItem>
                            </Select>
                            <p style={{ color:'red' }}>{formErrors.Domaine}</p>
                            <MDBRow className="justify-content-md-center mb-0 mt-0">
                            
                            </MDBRow>
                        </FormControl>
                    </div>
                </MDBCol>
                <div className="text-center mb-3">
                    <Button type='submit' style={btnstyle}> Suivant </Button>
                </div>
            </MDBRow>
            </form>
        </MDBContainer>
    </div>
  )
}
export default Form;