import React, { useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Nav from './Nav';
import Signup from './Signup';
import Login from './Login';

const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
}


function App() {

  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt => {
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value
    })
  }
  return ( 
    <div className="App">
      <Nav />
      <div className = "auth-wrapper">
        <div className = "auth-inner">
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup 
              values={formValues}
              onInputChange={onInputChange} />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
          
        </div>
      </div>
    </div>
   
  );
}

export default App;
