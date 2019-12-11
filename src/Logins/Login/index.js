import React, { Component } from 'react';
// import { Form, Label, Button, Message } from 'semantic-ui-react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import HeaderLogin from '../../Headers/HeaderLogin'
import '../logins.css'

class Login extends Component {
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
  
  // Submission of login form
  handleSubmit = async (e) => {
    e.preventDefault();
    const loginUrl = `${process.env.REACT_APP_API_URL}/api/v1/user/login`; 
    const loginResponse = await fetch(loginUrl, {
      method: 'POST',
      body: JSON.stringify(this.state),
      credentials: 'include', // Send a session cookie along with our request
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const parsedResponse = await  loginResponse.json();
  
    if (parsedResponse.status.code === 200) {
      console.log('Sign up successful');
      this.props.history.push('/home'); // Change url to /workouts programmatically with react-router
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
        <HeaderLogin />
        <Form className="loginForm" onSubmit={this.handleSubmit}>
          <h4>Sign In</h4>
          <Form.Label>Email</Form.Label>
          <Form.Control size="lg" type="email" name="email" onChange={this.handleChange} required />
          <Form.Label>Password</Form.Label>
          <Form.Control size="lg" type="password" name="password" onChange={this.handleChange} required />
          <Button className="loginsButtons" type="submit">Login</Button>
          { this.state.errorMsg ? <Alert negative>{this.state.errorMsg}</Alert> : null }
        </Form>
      </Container>
    )
  }
}

export default Login;
