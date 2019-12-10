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
          <Form.Control type='text' name='activity' value={props.workoutToEdit.activity} onChange={props.handleEditChange}/>
          <Form.Label className="editFormLabel">Duration:</Form.Label>
          <Form.Control type='text' name='duration' value={props.workoutToEdit.duration} onChange={props.handleEditChange}/>
          <Form.Label className="editFormLabelDesc">Description:</Form.Label>
          <Form.Control as="textarea" rows="5" name='description' value={props.workoutToEdit.description} onChange={props.handleEditChange}/>
            <Button className="editButton" type='submit'>Edit Workout</Button>
        </Form>
      </Modal.Body>
    </Modal>
    )
}

export default EditWorkout;