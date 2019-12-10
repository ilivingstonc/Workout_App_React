import React from 'react';
import { Link } from 'react-router-dom';
import {  Navbar, Dropdown } from 'react-bootstrap';
import '../headers.css'

const HeaderComponent = () => {

  return (
      <Navbar bg="light" expand="lg" className="justify-content-end">
      <Navbar.Brand>BIKEBUDDY</Navbar.Brand>
        <Dropdown inline>
          <Dropdown.Toggle>Menu</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="navDropdown">
              <Link to="/home">Home</Link>
              </Dropdown.Item>
              <Dropdown.Item className="navDropdown">
              <Link to="/login">Log Out</Link></Dropdown.Item>
              </Dropdown.Menu>
        </Dropdown>
      </Navbar>
  )
}

export default HeaderComponent;
