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
            this.setState({workouts: [parsedResponse.data, ...this.state.workouts]});
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
                    <Card.Text>Select the level of intensity that best describes your workout. Basing your training on power or heartrate zones 
                    is one of the most effective ways to bring focus to your training. Remember that higher intensity workouts can yield
                    faster training adaptation, but can also lead to overtraining without proper recovery periods.</Card.Text>
                    
                    <Card.Title>Duration</Card.Title>
                    <Card.Text>Duration, more commonly referred to as volume. High-volume workouts should generally be done in intensity zones 1-3. Workouts in zones 5-7
                    should involve less volume. High volume is generally described as base-training, which builds your aerobic capacity and resilience 
                    for the higher-intensity work that typically follows a base-building period.</Card.Text>
                    
                    <Card.Title>Description</Card.Title>
                    <Card.Text>Log how you felt on your workout. Looking back on this section may give you insights. For example, if
                    you're frequently commenting on knee pain, you may want to consider getting a professional bike-fitting. 
                    If you're frequently feeling overly depleted from your longer rides, you may want to increase your 
                    weekly volume while decreasing the number of interval workouts in a given week</Card.Text>
                    
                    <Card.Title>TSS Score</Card.Title>
                    <Card.Text>TSS, also known as your Training Stress Score is an important metric taken from your 
                    volume and intensity. Training stress should be accumulated gradually to increase fitness while minimizing the risk of overtraining
                    and injury. Your TSS can be calculated if you use a power meter and cycling computer. One hour at
                    a rider's Function Threshold Power (FTP) is the equivelant of a TSS score of 100. </Card.Text>
                    
                    <Button href="/myworkouts">My Workouts</Button>
                  </Card>
                </Col>
              </Row>
          </Container>
          )
      }
    }
    
    export default MainContainer