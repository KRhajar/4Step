import React from 'react';
import acceuil from "../../assets/img/acceuil.png" 
 
import { MDBContainer,MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Acceuil() {
  return (
    <div>
    
    <MDBContainer >
      <MDBRow className='row-cols-1 row-cols-md-2 g-3 pb-5  mt-4'>
        <MDBCol size='md' className='col-example '>
            <div className=' p-5 '>
             <h1 className='mb-3' style={{ color:'#2A5298' }}>Postuler votre projet en ligne et le suivre, c'est possible !</h1>
             <p className='who'>4STEP est une platforme qui aide les étudiants de UMP à postuler leurs projet en ligne et les offrir un accompagnement et un soutien pour la réalisation de projets entrepreneuriaux. </p>       
             <MDBBtn outline color='warning' className='m-2'>
        Lancer mon projet
      </MDBBtn>
      <MDBBtn outline color='warning' className='m-2'>
        Suivre mon projet
      </MDBBtn>
            
            </div>
            
        </MDBCol>
        <MDBCol size='md' className='col-example text-center' >
        
        <img src={acceuil} alt="" className='img-fluid'/>
        </MDBCol>
        
      </MDBRow>
     </MDBContainer>
  
     </div>


    
  );
}