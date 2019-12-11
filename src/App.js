import React from 'react';

import MainContainer from './Containers/MainContainer';

import Login from './Logins/Login';
import Register from './Logins/Register';

import WorkoutContainer from './Containers/WorkoutContainer'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Route, Switch } from 'react-router-dom';

//need state to store current user's name, current userId
//have state in your app - 

//need to read up on how to render props inside a route component
const My404 = () => {
  return (
    <div>
      <h3>You are lost.</h3>
    </div>
  )
}


function App() {
  
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/home" component={ MainContainer } />
          <Route exact path="/myworkouts" component= { WorkoutContainer } />
          <Route component={ My404 } />
        </Switch>
      </main>
    );
  }

  

export default App;