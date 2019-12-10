import React from 'react';
import { Table, Button} from 'react-bootstrap';


function WorkoutCard(props){

  const workouts = props.workouts.map((workout) => {
    return (
        <Table striped bordered hover variant="dark" responsive="xl" key={workout.id}>
          <thead>
            <tr>
              <th>Created On</th>
              <th>Title</th>
              <th>Activity</th>
              <th>Emphasis</th>
              <th>Duration</th>
              <th>Description</th>
              <th>TSS Score</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{workout.created_at}</td>
              <td>{workout.title}</td>
              <td>{workout.activity}</td>
              <td>{workout.emphasis}</td>
              <td>{workout.duration}</td>
              <td>{workout.description}</td>
              <td>{workout.tss}</td>
              <td>
                <Button className="workoutButton" onClick={() => props.deleteWorkout(workout.id)}>Delete</Button>
              </td>
              <td>
                <Button className="workoutButton" onClick={() => props.openAndEdit(workout)}>Edit</Button>
              </td>
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
