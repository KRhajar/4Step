import React,{useState , useEffect} from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import {TextField,Button} from '@material-ui/core'
import FormService from "../../services/FormService";
import form2 from "../../assets/img/form2.jpg" 

const FormSuiv2 = (props) => {
    
    const btnstyle={borderRadius:  15, backgroundColor: "#0C6358", color:"white",  textTransform: 'none', width:200,marginRight:10,};
    const {formValues, handleChange} = props;
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const back = e => {
        e.preventDefault();
        props.prevStep();
      };

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
        if(!values.motivation){
            errors.motivation = "Ce champ est obligatoire";
        }
        if(!values.dev_idee) {
            errors.dev_idee = "Ce champ est obligatoire";
        }
        if(!values.innovation) {
            errors.innovation = "Ce champ est obligatoire";
        }
        if(!values.duree) {
            errors.duree= "Ce champ est obligatoire";
        }
        if(!values.originalite) {
            errors.originalite = "Ce champ est obligatoire";
        }
        if(!values.impact) {
            errors.impact = "Ce champ est obligatoire";
        }
        if(!values.responsabilite) {
            errors.responsabilite = "Ce champ est obligatoire";
        }
        if(!values.perennite) {
            errors.perennite = "Ce champ est obligatoire";
        }
        return errors;
    };




  return (
    <div className="mt-4 mb-4">
        <MDBContainer>
        <form onSubmit={handleSubmit}>
            <MDBRow className=" justify-content-center offset-md-0 abc shadow-5">
                <MDBCol md="6">
                   <div>
                        <h3 className='txt'>Motivations</h3>
                        <TextField id="standard-basic" name='motivation' defaultValue={formValues.motivation} onChange={handleChange} label="Motivation" fullWidth /> <br></br>
                        <p style={{ color:'red' }}>{formErrors.motivation}</p>
                        <TextField id="standard-basic" name='dev_idee' defaultValue={formValues.dev_idee} onChange={handleChange} label="Développer votre idée" fullWidth />
                        <p style={{ color:'red' }}>{formErrors.dev_idee}</p>
                        <TextField id="standard-basic" name='innovation' defaultValue={formValues.innovation} onChange={handleChange} label="Innovation technologique et/ou dans les services offerts"  fullWidth />   
                        <p style={{ color:'red' }}>{formErrors.innovation}</p>
                        <TextField id="standard-basic" name='duree' defaultValue={formValues.duree} onChange={handleChange} label="Viabilité et durabilité du projet"  fullWidth />          
                        <p style={{ color:'red' }}>{formErrors.duree}</p>
                        <TextField id="standard-basic" name='originalite' defaultValue={formValues.originalite } onChange={handleChange} label="Originalité"  fullWidth />          
                        <p style={{ color:'red' }}>{formErrors.originalite}</p>
                        <TextField id="standard-basic" name='impact' defaultValue={formValues.impact} onChange={handleChange} label="Impact économique du projet" fullWidth />          
                        <p style={{ color:'red' }}>{formErrors.impact}</p>
                    </div>
                </MDBCol>
                <MDBCol md="6">
                    <div>
                    <h3 className='txt' >(Suite)</h3>
                    <TextField id="standard-basic" name='responsabilite' defaultValue={formValues.responsabilite} onChange={handleChange} label="Responsabilités sociale et environnementale " fullWidth />          
                    <p style={{ color:'red' }}>{formErrors.responsabilite}</p>
                    <TextField id="standard-basic" name='perennite' defaultValue={formValues.perennite} onChange={handleChange} label="Pérennité : potentiel de développement" fullWidth />          
                    <p style={{ color:'red' }}>{formErrors.perennite}</p>
                    <MDBRow className="justify-content-md-center mb-0 mt-0">
                    <img src={form2} className='img-fluid w-50' fullWidth   /> 
                    </MDBRow>
                </div>
                </MDBCol>
                <div className="text-center mb-3 mt-5">
                    <Button type='submit'  style={btnstyle} onClick={back} > Back </Button>
                    <Button type='submit'  style={btnstyle} > Envoyer </Button>
                </div>
            </MDBRow>
        </form>
        </MDBContainer>
    </div>
  )
}

export default FormSuiv2