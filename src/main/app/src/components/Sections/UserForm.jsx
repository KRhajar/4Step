import Form from '../Sections/Form'
import FormSuiv2 from '../Sections/FormSuiv2'
import Success from '../Sections/Success'
import SeeAllToConfirm from '../Sections/SeeAllToConfirm'
import React,{useState} from 'react'

const UserForm = () => {
    const initialValues = {email :"", intitlule :"", description: "", nom_prenom:"", ville:"", telephone:"", diplome:"", nom_autre_membre:"", Domaine:"", motivation : "", dev_idee:"", innovation:"",  duree:"", originalite:"", impact:"", responsabilite:"", perennite:"",};
    const [formValues, setFormValues] = useState(initialValues);
    const [step, setStep] = useState(1);

    // Proceed to next step
    const nextStep = () => {
        setStep((step) => step + 1);
    };

    // Go back to prev step
    const prevStep = () => {
        setStep((step) => step - 1);
    };
  
   // Handle fields change
    const handleChange = (e) => {
    const {name,value} = e.target;
    setFormValues({...formValues, [name]:value});
    console.log(formValues);
};

switch (step) {
    case 1:
      return (
        <Form
        nextStep={nextStep}
        handleChange={handleChange}
        formValues={formValues} />
      );
    case 2:
      return ( 
        <FormSuiv2
        nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formValues={formValues}
        />
      );
    case 3:
      return (
        <SeeAllToConfirm
          nextStep={nextStep}
          prevStep={prevStep}
          formValues={formValues}
        />
      );
    case 4:
      return  (   
      <Success />
      );
    default:
      (console.log('This is a multi-step form built with React.'))
  }
}

export default UserForm;