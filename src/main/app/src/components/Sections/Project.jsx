import React , { useState, useEffect } from 'react';
import { MDBContainer, MDBRadio,MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { useNavigate, Link, useParams } from "react-router-dom";
import UserServices from "../../services/UserServices"
export default function Project() {
  const { employeeId } = useParams();

  const [name, setName] = useState("");
  const [ville, setVille] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [domaine, setDomaine] = useState("");

  useEffect(() => {
    if (employeeId) {
        UserServices.getEntreprenneurById(employeeId).then((response) => {
            setName(response.data.nom_prenom)
            setVille(response.data.ville)
            setEmail(response.data.email)
            setPhone(response.data.telephone)
            setDescription(response.data.description)
            setDomaine(response.data.domaine)
        })
    }
}, [])
  return (
    <div>
    
    <MDBContainer >
      <MDBRow className='row-cols-1 row-cols-md-2 g-3 pb-5  mt-5 mb-3'>
        <MDBCol size='md' className='col-example text-center p-5 '>
           
            <hr />
                <h2 >  {name}</h2>
                <p><i className='fas fa-envelope me-3'></i>{email}</p>
                <p > <i className='fas fa-phone me-3'></i>{phone}</p>
                <p > <i className='fas fa-home me-3'></i>{ville}</p>
             
            <hr />
            <h2>Domaine du projet: </h2>
            <p>{domaine}</p>
       
            
        </MDBCol>
        <MDBCol size='md' className='col-example text-center p-5' >
       <h2>Description du projet: </h2>
       <p>{description}</p>
        
        
        </MDBCol>
        
      </MDBRow>
      <MDBRow className='row-cols-1 row-cols-md-2 g-3   '>
        <MDBCol size='w-25' className='col-example  p-5 '>
            
            <h2 className=' text-center pb-5'>Etat du projet: </h2>
            
            <div>
      <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label="En cours d'étude" defaultChecked />
      <MDBRadio name='flexRadioDefault' id='flexRadioDefault2' label='Convoqué' />
      <hr />
      <h4 className='p-3'>Accepté</h4>
     <MDBRadio name='flexRadioDefault' id='flexRadioDefault3' label='Près Incubé' />
      <MDBRadio name='flexRadioDefault' id='flexRadioDefault4' label='Incubé' />
      <hr />
      <MDBRadio name='flexRadioDefault' id='flexRadioDefault5' label='Refusé' />
    </div>  
        </MDBCol>
        <MDBCol size='md' className='col-example text-center p-5' >
       <h2>Motivation : </h2>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae molestiae corrupti vero ut sit, cupiditate est tempore! Ullam consequatur debitis voluptatum tenetur magni corrupti! Et, cumque facilis. Iusto, ea repellat?
       Earum temporibus placeat repellat ipsam, pariatur eius enim necessitatibus sequi amet, blanditiis quidem nesciunt tempora ab at quas laudantium delectus! Quibusdam laudantium eius exercitationem magnam minima nostrum quaerat a voluptas!
       Cum suscipit amet soluta accusamus vero repudiandae nostrum nemo impedit, debitis reiciendis qui ducimus! Aliquam harum sit, nesciunt blanditiis se dolore, alias sed dicta corporis recusandae esse optio neque, dolor consequatur saepe totam reiciendis iure quam place</p>
        
        
        </MDBCol>
        
      </MDBRow>
     </MDBContainer>

     </div>


    
  );
}