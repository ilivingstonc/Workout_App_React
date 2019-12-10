import React from 'react';
import { Link } from 'react-router-dom';
import {  Nav } from 'react-bootstrap';
import '../headers.css'

const HeaderLogin = () => {

  return (

    <Nav className="loginHeader">
       
        <Nav.Item>
          <Link to="/login/register">New? Register Here</Link>
        </Nav.Item>
      
    </Nav>
  )
}

export default HeaderLogin;