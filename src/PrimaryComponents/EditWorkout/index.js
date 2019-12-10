import React from 'react'
// import { Modal, Form, Button, Label, Header } from 'semantic-ui-react';
import { Modal, Form, Button } from 'react-bootstrap';
import '../containers.css'


const EditWorkout = (props) => {
  console.log(props)
  return (
    <Modal className="editModal" show={props.open}>
      <Modal.Header className="editModalHeader">Edit Workout</Modal.Header>
      <Modal.Body>
        <Form className="editForm" onSubmit={props.closeAndEdit}>

          <Form.Label className="editFormLabel">Title:</Form.Label>
          <Form.Control type='text' name='title' value={props.workoutToEdit.title} onChange={props.handleEditChange}/>

          <Form.Label className="editFormLabel">Activity:</Form.Label>
          <Form.Control as='select' name='activity' value={props.workoutToEdit.activity} onChange={props.handleEditChange}>
            <option></option>
            <option>Outdoor Cycling</option>
            <option>Indoor Cycling</option>
            <option>Cross-training (Endurance)</option>
            <option>Cross-training (Core-Strength)</option>
            <option>Cross-training (Leg-Strength)</option>
            <option>Other</option>
          </Form.Control>

          <Form.Label className="editFormLabel">Emphasis:</Form.Label>
          <Form.Control as='select' name='emphasis' value={props.workoutToEdit.emphasis} onChange={props.handleEditChange}>
              <option>Recovery (Z1)</option>
              <option>Endurance (Z2)</option>
              <option>Tempo (Z3)</option>
              <option>Threshold (Z4)</option>
              <option>V02 (Z5)</option>
              <option>Aerobic Capacity (Z6)</option>
              <option>Anaerobic (Z7)</option>
              <option>Cross-training (Endurance)</option>
              <option>Cross-training (Strength)</option>
            </Form.Control>

          <Form.Label className="editFormLabel">Duration:</Form.Label>
          <Form.Control as='select' name='duration' value={props.workoutToEdit.duration} onChange={props.handleEditChange}>
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

          <Form.Label className="editFormLabelDesc">Description:</Form.Label>
          <Form.Control as="textarea" rows="5" name='description' value={props.workoutToEdit.description} onChange={props.handleEditChange}/>

          <Form.Label className="editFormLabel">TSS Score:</Form.Label>
          <Form.Control type='text' name='tss' value={props.workoutToEdit.tss} onChange={props.handleEditChange}/>

            <Button className="editButton" type='submit'>Edit Workout</Button>

        </Form>
      </Modal.Body>
    </Modal>
    )
}

export default EditWorkout;