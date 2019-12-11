import React from 'react';
import { Table, Button} from 'react-bootstrap';


function WorkoutCard(props){

  const workouts = props.workouts.map((workout) => {
    return (
        <Table striped bordered hover variant="dark" responsive="xl" key={workout.id}>
          <thead>
            <tr>
              <th>Date</th>
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
            <tr>
                <Button variant="warning" className="workoutEditButton" onClick={() => props.openAndEdit(workout)}>Edit</Button>
                <Button variant="danger" className="workoutDeleteButton"  onClick={() => props.deleteWorkout(workout.id)}>Delete</Button>
            </tr>
          </tbody>
        </Table>
        )
  })

  return (
      <section>
        { workouts }
      </section>
    )
}

export default WorkoutCard
