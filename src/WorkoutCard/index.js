import React from 'react';
import { Card, Button} from 'semantic-ui-react';

function WorkoutCard(props){

  const workouts = props.workouts.map((workout) => {
    return (
        <Card key={workout.id}>
          <Card.Content>
            <Card.Header>{workout.title}</Card.Header>
            <Card.Description>{workout.activity}</Card.Description>
            <Card.Description>{workout.duration}</Card.Description>
            <Card.Description>{workout.perceived_effort}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button onClick={() => props.deleteWorkout(workout.id)}>Delete Workout</Button>
            <Button onClick={() => props.openAndEdit(workout)}>Edit Workout</Button>
          </Card.Content>
        </Card>
        )
  })

  return (
      <Card.Group>
        { workouts }
      </Card.Group>
    )
}

export default WorkoutCard