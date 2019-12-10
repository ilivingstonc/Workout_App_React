import React from 'react';
import { Link } from 'react-router-dom';
import {  Nav } from 'react-bootstrap';
import '../headers.css'

const HeaderRegister = () => {

  return (

    <Nav className="registerHeader">
       
        <Nav.Item>
          <Link to="/login">Registered? Log In Here</Link>
        </Nav.Item>
      
    </Nav>
  )
}

export default HeaderRegister;