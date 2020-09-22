import React from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Home from './Home';
import Nav from './Nav';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login'




function App() {

  

  return( 
    <div className="App">
      <Nav />
      <div className = "auth-wrapper">
        <div className = "auth-inner">
          <Switch>
            <Route path ='/login'>
              <Login />
            </Route>
            <Route path ='/signup'>
              <Signup />
            </Route>
          </Switch> 
          
        </div>
      </div>
    </div>
   
  );
}

export default App;
