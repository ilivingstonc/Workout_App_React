import React from 'react';
import { Table, Button} from 'react-bootstrap';


function WorkoutCard(props){

  const workouts = props.workouts.map((workout) => {
    return (
        <Table striped bordered hover variant="dark" responsive="xl" key={workout.id}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Activity</th>
              <th>Emphasis</th>
              <th>Duration</th>
              <th>Description</th>
              <th>TSS Score</th>
            </tr>
            <tr>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{workout.title}</td>
              <td>{workout.activity}</td>
              <td>{workout.emphasis}</td>
              <td>{workout.duration}</td>
              <td>{workout.description}</td>
              <td>{workout.tss}</td>
            </tr>

            <Button variant="warning" className="workoutEdtButton" onClick={() => props.openAndEdit(workout)}>Edit</Button>
            <Button variant="danger" className="workoutDeleteButton"  onClick={() => props.deleteWorkout(workout.id)}>Delete</Button>
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
