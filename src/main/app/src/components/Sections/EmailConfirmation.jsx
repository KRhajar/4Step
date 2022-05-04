import React from 'react';
import email from "../../assets/img/emailConfirm.png" 
 
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function EmailConfirmation() {
  return (
    <div>
    
    <MDBContainer >
      <MDBRow className='row-cols-1 row-cols-md-2 g-3 pb-5 '>
        <MDBCol size='md' className='col-example '>
            <div className=' p-5 mt-5'>
             <h1 className='mt-5' style={{ color:'#2A5298' }}>Lien de vérification envoyé!</h1>
             <p className='who '>
Nous vous avons envoyé un e-mail de confirmation. Vérifiez votre e-mail.</p>       
            
           
            </div>
            
        </MDBCol>
        <MDBCol size='md' className='col-example text-center' >
        
        <img src={email} alt="" className='img-fluid'/>
        </MDBCol>
        
      </MDBRow>
     </MDBContainer>
  
     </div>


    
  );
}