import React, { Component } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import '../containers.css'

class CreateWorkout extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      activity: '',
      duration: '',
      description: '',
    }
  }
  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }


  render(){
    return (
      <Container className="createContainer">
        <Card className="createCard">
          <Card.Header className="createHeader">Create Workout</Card.Header>
          <Form className="createForm" onSubmit={(e) => this.props.addWorkout(e, this.state)}>
            <Card.Title className="createCardTitle">Title:</Card.Title>
            <Form.Control type='text' name='title' onChange={this.handleChange}/>
            <Card.Title className="createCardTitle">Activity:</Card.Title>
            <Form.Control type='text' name='activity' onChange={this.handleChange}/>
            <Card.Title className="createCardTitle">Duration:</Card.Title>
            <Form.Control type='text' name='duration' onChange={this.handleChange}/>
            <Card.Title className="createCardTitle">Description</Card.Title>
            <Form.Control as="textarea" rows="5" type='text' name='description'  onChange={this.handleChange}/>
            <Button className="createButton" type='Submit'>Create</Button>
          </Form>
        </Card>
      </Container>
      )
  }
}

export default CreateWorkout;