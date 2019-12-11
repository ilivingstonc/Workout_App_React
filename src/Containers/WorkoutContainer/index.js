import React, { Component } from 'react';

import HeaderComponent from '../../Headers/Header'
import WorkoutCard from '../../PrimaryComponents/WorkoutCard'
import EditWorkout from '../../PrimaryComponents/EditWorkout'

import {  Row, Col, Container } from 'react-bootstrap';


class WorkoutContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workouts: [],
            workoutToEdit: {
                date: '',
                title: '',
                activity: '',
                intensity: '',
                duration: '',
                description: '',
                tss: '',
                id: ''
            },
            showEditModal: false
        }
    }

    componentDidMount(){
        this.getWorkouts();
      }
      getWorkouts = async () => {
    
        try {
          const workouts = await fetch(process.env.REACT_APP_API_URL + '/api/v1/workouts/', {
            credentials: 'include',
            method: 'Get'
          });
          const parsedWorkouts = await workouts.json();
          // console.log(parsedWorkouts);
          this.setState({
            workouts: parsedWorkouts.data.reverse()
          })
        } catch(err){
          console.log(err);
        }
      }

      deleteWorkout = async (id) => {
    
        console.log(id)
        const deleteWorkoutResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/workouts/' + id +'/', {
          method: 'DELETE',
          credentials: 'include'
        });
    
        // This is the parsed response from workout
        const deleteWorkoutParsed = await deleteWorkoutResponse.json();
        console.log(deleteWorkoutResponse)
    
        // Now that the db has deleted our item, we need to remove it from state
        // Then make the delete request, then remove the workout from the state array using filter
        if (deleteWorkoutParsed.status.code === 200) {
          console.log(deleteWorkoutParsed, ' response from Flask server')
          this.setState({workouts: this.state.workouts.filter((workout) => workout.id !== id )})
        } else {
          alert(deleteWorkoutParsed.status.message);
        }
    
      }

      openAndEdit = (workoutFromTheList) => {
          console.log(workoutFromTheList, ' workoutToEdit  ');
          
          
          this.setState({
              showEditModal: true,
              workoutToEdit: {
                  ...workoutFromTheList
                }
            })
        }

        handleEditChange = (e) => {
            
            this.setState({
                workoutToEdit: {
                    ...this.state.workoutToEdit,
                    [e.currentTarget.name]: e.currentTarget.value
                }
            });
        }

        closeAndEdit = async (e) => {
          // Put request,
          e.preventDefault();
          // then update state
          try {
            console.log('Sending new workout data to server:', this.state.workoutToEdit);
            const editWorkoutUrl = `${process.env.REACT_APP_API_URL}/api/v1/workouts/${this.state.workoutToEdit.id}/`;
            const editResponse = await fetch(editWorkoutUrl, {
              method: 'PUT',
              credentials: 'include',
              body: JSON.stringify(this.state.workoutToEdit),
              headers: {
                'Content-Type': 'application/json'
              }
            });
      
            const editResponseParsed = await editResponse.json();
            console.log(editResponseParsed, ' parsed edit')
      
            const newWorkoutArrayWithEdit = this.state.workouts.map((workout) => {
      
              if(workout.id === editResponseParsed.data.id){
                workout = editResponseParsed.data
              }
      
              return workout
            });
      
            this.setState({
              showEditModal: false,
              workouts: newWorkoutArrayWithEdit
            });

            this.getWorkouts()
      
      
          } catch(err){
            console.log(err)
          }
      
      
        }

    render(){
        return (
            <Container className="workoutContainer">
                <Row>
                <Col >
                    <HeaderComponent />
                </Col>
                </Row>
                <Row>
                <Col>
                    <EditWorkout handleEditChange={this.handleEditChange} open={this.state.showEditModal} workoutToEdit={this.state.workoutToEdit} closeAndEdit={this.closeAndEdit}/>
                </Col>
                </Row>
                <Row>
                <Col>
                    <h1>your workouts</h1>
                    <WorkoutCard className="workoutTable" workouts={this.state.workouts} deleteWorkout={this.deleteWorkout} openAndEdit={this.openAndEdit}/>
                </Col>
                </Row>
            </Container>

        )
    }
}

export default WorkoutContainer;