import React from 'react';
import acceuil from "../../assets/img/acceuil.png" 
import etape1 from "../../assets/icons/etape1.png" 
import etape2 from "../../assets/icons/etape2.png" 
import etape3 from "../../assets/icons/etape3.png" 
import image from "../../assets/img/propos.png" 
import logo from "../../assets/icons/icon.png" 
import dev from "../../assets/icons/dev.png" 
import finance from "../../assets/icons/finance.png" 
import success from "../../assets/icons/success.png" 
import group from "../../assets/icons/group.png" 
import marche from "../../assets/icons/marche.png"  
import etape4 from "../../assets/icons/etape4.png" 
import { MDBCard,MDBContainer,MDBBtn, MDBCardBody, MDBCardTitle, MDBRow, MDBCol } from 'mdb-react-ui-kit';


export default function Acceuil() {
  return (
    <div>
    
    <MDBContainer >
      <MDBRow className='row-cols-1 row-cols-md-2 g-3 pb-5  mt-4'>
        <MDBCol size='md' className='col-example '>
            <div className=' p-5 '>
             <h1 className='mb-3' style={{ color:'#2A5298' }}>Postuler votre projet en ligne et le suivre, c'est possible !</h1>
             <p className='who'>4STEP est une platforme qui aide les étudiants de UMP à postuler leurs projet en ligne et les offrir un accompagnement et un soutien pour la réalisation de projets entrepreneuriaux. </p>       
             
            
            </div>
            
        </MDBCol>
        <MDBCol size='md' className='col-example text-center' >
        
        <img src={acceuil} alt="" className='img-fluid'/>
        </MDBCol>
        
      </MDBRow>
     </MDBContainer>
     <div >
     
      
     <MDBContainer className='white mt-5'>
     <MDBRow className='row-cols-1 row-cols-md-2 g-3 pb-5  '>
       <MDBCol size='md' className='col-example '>
           <div className=' m-5 p-5 '>
            <h1 className='mb-3' style={{ color:'#2A5298' }}>Qui nous sommes ?</h1>
            <p className='who'>4STEP est une platforme qui aide les étudiants de UMP à postuler leurs projet en ligne et les offrir un accompagnement et un soutien pour la réalisation de projets entrepreneuriaux. </p>       
           </div>
           
       </MDBCol>
       <MDBCol size='md' className='col-example text-center' >
       
       <img src={image} alt="" className='img-fluidx' height={400}/>
       </MDBCol>
       
     </MDBRow>
    </MDBContainer>
   
 
    


   <div className='linearBackground md-5 p-5'>
     <h1 className='text-center  whiteText pt-5'>Comment ça marche:</h1>
     
     <MDBContainer className=' p-5'>
     <MDBRow className='row-cols-1 row-cols-md-4 g-4  '>
       <MDBCol size='md' className='col-example  text-center'>
       Creation d’un compte
       <br />
         <img src={etape1} alt="" className='img-fluid center-block'/>
        
       </MDBCol>
       <MDBCol size='md' className='col-example text-center' >
       Remplissage de formulaire
       <br />
       <img src={etape2} alt="" className='image-fluid center-block'/>
       </MDBCol>
       <MDBCol size='md' className='col-example  text-center'>
       Validation de votre projet

       <br />
         <img src={etape3} alt="" className='image-fluid center-block'/>
       </MDBCol>
       <MDBCol size='md' className='col-example  text-center'>
       Suivre et gerer votre projet 
       <br />
         <img src={etape4} alt="" className='image-fluid center-block'/>
       </MDBCol>
     </MDBRow>
   </MDBContainer>
   
   </div>
   



   
   <h1 className=' pt-5 text-center' style={{ color:'#2A5298' }}>On vous aide à:</h1>
     
     <MDBRow className='row-cols-1 row-cols-md-3 g-4  m-5 pb-5 '>
       
       <MDBCol>
         <MDBCard alignment='center'>
           
           <MDBCardBody >
             <MDBCardTitle>Valider ton idée d’entreprise</MDBCardTitle>
             <img src={logo} alt="" height={50}/>
           </MDBCardBody>
         </MDBCard>
       </MDBCol>
       <MDBCol>
         <MDBCard alignment='center'>
           
           <MDBCardBody>
             <MDBCardTitle>Développer ton projet</MDBCardTitle>
             <img src={dev} alt="" height={50}/>
           </MDBCardBody>
         </MDBCard>
       </MDBCol>
       <MDBCol>
         <MDBCard alignment='center'>
          
           <MDBCardBody>
             <MDBCardTitle>Rencontrer des partenaires</MDBCardTitle>
             <img src={group} alt="" height={50}/>
           </MDBCardBody>
         </MDBCard>
       </MDBCol>
       
     </MDBRow>
     <MDBRow className='row-cols-1 row-cols-md-3 g-4  m-5'>
       
       <MDBCol>
         <MDBCard alignment='center'>
           
           <MDBCardBody >
             <MDBCardTitle>Rejoindre des marchés potentiels</MDBCardTitle>
             <img src={marche} alt="" height={50}/>
           </MDBCardBody>
         </MDBCard>
       </MDBCol>
       <MDBCol>
         <MDBCard alignment='center'>
           
           <MDBCardBody>
             <MDBCardTitle>Financer votre projet</MDBCardTitle>
             <img src={finance} alt="" height={50}/>
           </MDBCardBody>
         </MDBCard>
       </MDBCol>
       <MDBCol>
         <MDBCard alignment='center'>
          
           <MDBCardBody>
             <MDBCardTitle>Rencontrer des partenaires</MDBCardTitle>
             <img src={success} alt="" height={50}/>
           </MDBCardBody>
         </MDBCard>
       </MDBCol>
       
     </MDBRow>
   </div>
     </div>


    
  );
}