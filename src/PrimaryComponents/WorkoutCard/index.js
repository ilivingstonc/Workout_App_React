import React from 'react';
import { Table, Button, ButtonGroup, Container, Card} from 'react-bootstrap';
import '../containers.css'


function WorkoutCard(props){

  const workouts = props.workouts.map((workout) => {
    return (
      <Container>
      <Card className="tableCard">
        <Table striped bordered hover variant="dark" responsive="xl" key={workout.id}>
          <thead>
            <tr>
              <th>Date of Workout</th>
              <th>Title</th>
              <th>Activity</th>
              <th>Intensity/Zone</th>
              <th>Duration</th>
              <th>Description</th>
              <th>TSS Score</th>
            </tr>
            <tr>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{new Date(workout.date).toDateString()}</td>
              <td>{workout.title}</td>
              <td>{workout.activity}</td>
              <td>{workout.intensity}</td>
              <td>{workout.duration}</td>
              <td>{workout.description}</td>
              <td>{workout.tss}</td>
            </tr>
          </tbody>
        </Table>
          <ButtonGroup className="workoutButtons">
            <Button variant="warning" onClick={() => props.openAndEdit(workout)}>Edit</Button>
            <Button variant="danger" onClick={() => props.deleteWorkout(workout.id)}>Delete</Button>
          </ButtonGroup>
        </Card>
        </Container>
        )
  })

  return (
      <section>
        { workouts }
      </section>
    )
}

export default WorkoutCard
