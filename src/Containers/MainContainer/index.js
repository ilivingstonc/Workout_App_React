import React, { Component } from 'react';
import CreateWorkout from '../../PrimaryComponents/CreateWorkout';
import '../containers.css'


import {  Row, Col, Card, Container, Button } from 'react-bootstrap';
import HeaderComponent from '../../Headers/Header';


class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            workouts: [],
           
        }
    }
    
      addWorkout = async (e, workout) => {
        // .bind arguments take presidence over every other argument
        e.preventDefault();
        // console.log(workout);
    
        try {
    
          //  send JSON
          // createdWorkout variable will store the response from the express API
          const createdWorkoutResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/workouts/', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(workout),
            headers: {
              'Content-Type': 'application/json'
            }
          });
    
          // we have to turn the response from flask into
          // an object we can use
          const parsedResponse = await createdWorkoutResponse.json();
          console.log(parsedResponse, ' this is response')
          // we are emptying all the workouts that are living in state into a new array,
          // and then adding the workout we just created to the end of it
          // the new workout which is called parsedResponse.data
    
          if (parsedResponse.status.code === 201) {
            this.setState({workouts: [...this.state.workouts, parsedResponse.data]});
          } else {
            alert(parsedResponse.status.message);
          }
        } catch(err){
          // Will be reached if CORS fails, ERR_CONNECT_FAILED or invalid JSON response
          console.log('error')
          console.log(err)
        }
        // request address will start with 'http://localhost:9000'
        // becuase after we create it, we want to add it to the workouts array
      }
     
        
        render(){
        return (
          
          <Container className="mainContainer">
              <Row>
                <Col >
                  <HeaderComponent />
                </Col>
              </Row>
              <Row>
                <Col>
                  <CreateWorkout addWorkout={this.addWorkout}/>
                </Col>
          
                <Col>
                  <Card className="introCard">
                    
                    <Card.Header>
                      <Card.Title>BIKEBUDDY is here to help you train smarter</Card.Title>
                    </Card.Header>
                    
                    <Card.Text>
                      Complete the form after each workout to track your workout progress. <br/>
                    </Card.Text>
                    
                    <Card.Title>Date</Card.Title>
                    <Card.Text>Enter the date when you completed your workout</Card.Text>

                    <Card.Title>Title</Card.Title>
                    <Card.Text>Title your workout with a name that's easy for you to remember</Card.Text>

                    <Card.Title>Activity</Card.Title>
                    <Card.Text>Choose an activity-type that best describes your workout.</Card.Text>

                    <Card.Title>Intensity/Zones</Card.Title>
                    <Card.Text>Select the level of intensity that best describes your workout. Higher intensity workouts may
                    yield good results for time-crunched athletes, but are also more likely to lead to overtraining or injuries
                    if recovery time isn't considered.</Card.Text>
                    
                    <Card.Title>Duration</Card.Title>
                    <Card.Text>Enter a workout duration. Higher volume rides (2.5+ hours) are generally
                    better for building a strong aerobic base and resilience while recovery and high intensity work may be shorter in duration (30-90min).</Card.Text>
                    
                    <Card.Title>Description</Card.Title>
                    <Card.Text>Details about your workout. Looking back on this section may give you insights or help you notice patterns</Card.Text>
                    
                    <Card.Title>TSS Score</Card.Title>
                    <Card.Text>TSS, also known as your Training Stress Score, is an indicator of how much stress your body is being exposed to through
                      training. Your TSS for the previous seven days should increase gradually to maximize training benefits while preventing overtraining and injury.
                    </Card.Text>
                    
                    <Button href="/myworkouts">View Workouts</Button>
                  </Card>
                </Col>
              </Row>
          </Container>
          )
      }
    }
    
    export default MainContainer