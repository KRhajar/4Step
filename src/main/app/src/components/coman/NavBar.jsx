import React, { useEffect, useState } from 'react';
import logo from "../../assets/img/4step.png" 
import { NavLink } from 'react-router-dom';
import url from './config.json'

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
import axios from 'axios';


export default function NavBar() {
  const [showBasic, setShowBasic] = useState(false);
  const [user, setUser]= useState(null)

  useEffect(()=>{
    axios.get(url.url + '/current-user').then(res => setUser(res.data)).catch(err => console.log("USER NOT LOGGED"))
  }, [])
 

  return (


    <MDBNavbar expand='lg' light bgColor='light'  className='sti' style={{ zIndex: '2000' }}>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'><img src={logo} alt="" height={50}  /></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)
        }
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 center'>
            <MDBNavbarItem  >
              
              <MDBNavbarLink aria-current='page' ><NavLink to="/" activeclassname="active" className="link">
 Acceuil
</NavLink>
              </MDBNavbarLink>
              
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink><NavLink to="/propos" activeclassname="active" className="link">
 A propos
</NavLink></MDBNavbarLink>
            </MDBNavbarItem>

            
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link h'>
                  Accompagnement
                  
                </MDBDropdownToggle>
                <MDBDropdownMenu style={{ zIndex: '25000' }}>
                  <MDBDropdownItem>
                    <MDBDropdownLink  ><a href="/form" activclassname="active" className="link">
                    Lancer mon projet
</a></MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink><NavLink to="/login" activeclassname="active" className="link">
                    Suivre mon projet
</NavLink></MDBDropdownLink>
                  </MDBDropdownItem>
                  
                </MDBDropdownMenu>
              </MDBDropdown>
            
            
          </MDBNavbarNav>

          {user == null &&
            <span > <MDBBtn size='sm' rounded outline color="warning"><a href="/login" activclassname="active" className="link">
            Se connecter</a></MDBBtn>
            </span>
          }
          {
            user != null &&
            <span > <MDBBtn size='sm' rounded outline color="warning">
            Bonjours, {user.firstName}</MDBBtn>
            </span>
          }
         
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}