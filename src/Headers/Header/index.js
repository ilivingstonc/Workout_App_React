import React from 'react';
import { Link } from 'react-router-dom';
import {  Navbar, Nav } from 'react-bootstrap';
import '../headers.css'

const HeaderComponent = () => {

  return (
    <Navbar className="mainHeader" expand="lg" variant="light" bg="light">
      <Nav class="justify-content-start">
        <Nav.Item className="navBrandTitle">Your Workouts</Nav.Item>
      </Nav>
      <Nav class="nav navbar-nav ml-auto w-100 justify-content-end">
          <Nav.Item className="navLogout">
            <Link to="/login">Log Out</Link>  
          </Nav.Item> 
      </Nav>
    </Navbar>
  )
}

export default HeaderComponent;
