import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../containers.css'

class CreateWorkout extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      activity: '',
      emphasis: '',
      duration: '',
      description: '',
      tss: ''
    }
  }
  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }


  render(){
    return (
      <Container className="createContainer">
        <Form className="createForm" onSubmit={(e) => this.props.addWorkout(e, this.state)}>
          <Form.Group>
            <Form.Label className="createLabel">Create Workout</Form.Label>

          </Form.Group>
          <Form.Group>
            <Form.Label className="createFormTitle">Title:</Form.Label>
            <Form.Control type='text' name='title' onChange={this.handleChange}/>

          </Form.Group>
          <Form.Group>
            <Form.Label className="createFormAct">Activity:</Form.Label>
            <Form.Control as='select' name='activity' onChange={this.handleChange}>
              <option></option>
              <option>Outdoor Cycling</option>
              <option>Indoor Cycling</option>
              <option>Cross-training (Endurance)</option>
              <option>Cross-training (Core-Strength)</option>
              <option>Cross-training (Leg-Strength)</option>
              <option>Other</option>
            </Form.Control>   
          </Form.Group>

          <Form.Group>
            <Form.Label className="createFormInt">Intensity/Zone(Z):</Form.Label>
            <Form.Control as='select' name='emphasis' onChange={this.handleChange}>
              <option></option>
              <option>Recovery (Z1)</option>
              <option>Endurance (Z2)</option>
              <option>Tempo (Z3)</option>
              <option>Threshold (Z4)</option>
              <option>V02 (Z5)</option>
              <option>Aerobic Capacity (Z6)</option>
              <option>Anaerobic (Z7)</option>
              <option>Cross-training (Endurance)</option>
              <option>Cross-training (Strength)</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label className="createFormDura">Duration:</Form.Label>
            <Form.Control as='select' name='duration' onChange={this.handleChange}>
              <option></option>
              <option>15m</option>
              <option>30m</option>
              <option>45m</option>
              <option>1h</option>
              <option>1h:15m</option>
              <option>1h:30m</option>
              <option>1h:45m</option>
              <option>2h</option>
              <option>2h:15m</option>
              <option>2h:30m</option>
              <option>2h:45m</option>
              <option>3h</option>
              <option>3h:30m</option>
              <option>4h</option>
              <option>4h:30m</option>
              <option>5h</option>
              <option>6h</option>
              <option>7h</option>
              <option>8-10h</option>
              <option>10-12hr</option>
              <option>12h+</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label className="createFormDesc">Description</Form.Label>
            <Form.Control as="textarea" rows="5" type='text' name='description'  onChange={this.handleChange}/>          
          </Form.Group>

          <Form.Group>
            <Form.Label className="createFormTSS">TSS Score</Form.Label>
            <Form.Control type="text" name='tss'  onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group>
            <Button className="createButton" type='Submit'>Create</Button>
          </Form.Group>

        </Form>
      </Container>
      )
  }
}

export default CreateWorkout;
