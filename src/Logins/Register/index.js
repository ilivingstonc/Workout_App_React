import React, { Component } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import HeaderRegister from '../../Headers/HeaderRegister'
import '../logins.css'

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  // Handling of form value change
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  
  // Submission of register in form
  handleSubmit = async (e) => {
    e.preventDefault();
    const registrationUrl = `${process.env.REACT_APP_API_URL}/api/v1/user/register`; // localhost:8000/api/v1/user/register
    const registerResponse = await fetch(registrationUrl, {
      method: 'POST',
      body: JSON.stringify(this.state),
      credentials: 'include', // Send a session cookie along with our request
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const parsedResponse = await registerResponse.json();
  
    if (parsedResponse.status.code === 201) {
      console.log('Sign up successful');
      this.props.history.push('/home'); // Change url to /home programmatically with react-router
    } else {
      // Else display error message to the user
      this.setState({
        errorMsg: parsedResponse.status.message
      });
    }
  }

  render() {
    return (
      <Container>
        <HeaderRegister />
        <Form className="registerForm" onSubmit={this.handleSubmit}>
          <h4>Create New Account</h4>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" onChange={this.handleChange} required />
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" onChange={this.handleChange} required />
          <Button className="loginsButtons" type="submit" color="green">Sign Up</Button>
          { this.state.errorMsg ? <Alert negative>{this.state.errorMsg}</Alert> : null }
        </Form>
      </Container>
    )
  }
}

export default Register;
