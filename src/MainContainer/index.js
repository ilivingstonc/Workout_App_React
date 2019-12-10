import React, { Component } from 'react';
import WorkoutCard from '../PrimaryComponents/WorkoutCard';
import CreateWorkout from '../PrimaryComponents/CreateWorkout';
import EditWorkout from '../PrimaryComponents/EditWorkout';
import './style.css'


import {  Row, Col } from 'react-bootstrap';
import HeaderComponent from '../Headers/Header';


class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            workouts: [],
            workoutToEdit: {
                title: '',
                activity: '',
                duration: '',
                description: '',
                created_at: '',
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
            workouts: parsedWorkouts.data
          })
        } catch(err){
          console.log(err);
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
          
          <div className="mainContainer">
              <Row>
                <Col >
                  <HeaderComponent />
                </Col>
              </Row>
              <Row>
                <Col>
                  <CreateWorkout addWorkout={this.addWorkout}/>
                  <EditWorkout handleEditChange={this.handleEditChange} open={this.state.showEditModal} workoutToEdit={this.state.workoutToEdit} closeAndEdit={this.closeAndEdit}/>
                </Col>
              </Row>
              <Row>
                <Col >
                  <WorkoutCard workouts={this.state.workouts} deleteWorkout={this.deleteWorkout} openAndEdit={this.openAndEdit}/>
                </Col>
              </Row>
          </div>
          )
      }
    }
    
    export default MainContainer