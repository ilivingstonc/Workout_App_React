import React from 'react';
import Register from './Logins/Register';
import Login from './Logins/Login';
import './App.css';
import MainContainer from './MainContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
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
          <Route exact path="/login" component={ Login } />
          <Route exact path="/login/register" component={ Register } />
          <Route path="/home" component={ MainContainer } />
          <Route component={ My404 } />
        </Switch>
      </main>
    );
  }

  

export default App;