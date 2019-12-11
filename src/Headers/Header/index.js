import React from 'react';
import {  Navbar, Dropdown } from 'react-bootstrap';
import '../headers.css'

const HeaderComponent = () => {

  return (
      <Navbar bg="light" expand="lg" className="justify-content-end">
      <Navbar.Brand className="brandHeader">BIKEBUDDY</Navbar.Brand>
        <Dropdown inline='true'>
          <Dropdown.Toggle>Menu</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item className="navDropdown" href="/home">Home</Dropdown.Item>
                <Dropdown.Item className="navDropdown" href="/myworkouts">My Workouts</Dropdown.Item>
                <Dropdown.Item className="navDropdown" href="/login">Log Out</Dropdown.Item>
              </Dropdown.Menu>
        </Dropdown>
      </Navbar>
  )
}

export default HeaderComponent;
