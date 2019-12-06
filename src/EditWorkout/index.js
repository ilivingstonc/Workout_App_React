import React from 'react'
import { Modal, Form, Button, Label, Header } from 'semantic-ui-react';


const EditWorkout = (props) => {
  console.log(props)
  return (
    <Modal open={props.open}>
      <Header>Edit Workout</Header>
      <Modal.Content>
        <Form onSubmit={props.closeAndEdit}>
          <Label>
            title:
          </Label>
          <Form.Input type='text' name='title' value={props.workoutToEdit.title} onChange={props.handleEditChange}/>
          <Label>
            activity:
          </Label>
          <Form.Input type='text' name='activity' value={props.workoutToEdit.activity} onChange={props.handleEditChange}/>
          <Label>
            duration:
          </Label>
          <Form.Input type='text' name='duration' value={props.workoutToEdit.duration} onChange={props.handleEditChange}/>
          <Label>
            perceived effort:
          </Label>
          <Form.Input type='text' name='perceived_effort' value={props.workoutToEdit.perceived_effort} onChange={props.handleEditChange}/>
          <Modal.Actions>
            <Button color='green' type='submit'>Edit Workout</Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
    )
}

export default EditWorkout;