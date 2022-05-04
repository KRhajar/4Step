import React from 'react';
import { MDBFooter,MDBIcon,MDBBtn } from 'mdb-react-ui-kit';
import logo from "../../assets/img/4step.png" 

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      
    
      <section className='p-3'>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img src={logo} alt="" height={50} />
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </div>

            

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Suivez-nous:</h6>
              <a href="https://www.better.dev/how-to-add-fonts-to-a-react-project"><p><i className='fab fa-facebook-f me-3'></i> Facebook</p>
              </a>
            <a href=""><p><i className='fab fa-linkedin me-3'></i> Linkedin</p></a>  
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> New York, NY 10012, US
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                info@example.com
              </p>
              <p>
              <i className='fas fa-phone me-3'></i> + 01 234 567 88
              </p>
             
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          4step.com
        </a>
      </div>
    </MDBFooter>
  );
}