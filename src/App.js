import React from 'react';
import Register from './Register';
import Login from './Login';
import './App.css';
import MainContainer from './MainContainer';
import Header from './Header';
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
        <Header />
        <Switch>
          <Route exact path="/" component={ Register } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/workouts" component={ MainContainer } />
          <Route component={ My404 } />
        </Switch>
      </main>
    );
  }

  

export default App;