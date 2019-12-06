import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';

class CreateWorkout extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      activity: '',
      duration: '',
      perceived_effort: '',
    }
  }
  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  render(){
    return (
      <Segment>
        <h4>Create Workout</h4>
        <Form onSubmit={(e) => this.props.addWorkout(e, this.state)}>
          <Label>Title:</Label>
          <Form.Input type='text' name='title' onChange={this.handleChange}/>
          <Label>Activity:</Label>
          <Form.Input type='text' name='activity' onChange={this.handleChange}/>
          <Label>Duration:</Label>
          <Form.Input type='text' name='duration'  onChange={this.handleChange}/>
          <Label>Perceived Effort:</Label>
          <Form.Input type='text' name='perceived_effort'  onChange={this.handleChange}/>
          <Button type='Submit'>Create Workout</Button>
        </Form>
      </Segment>
      )
  }
}

export default CreateWorkout;