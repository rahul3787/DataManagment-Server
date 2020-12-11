import React from 'react';
import logo from './logo.svg';
import './App.css';
import Frontform from './component/form'
import Display from './component/display'

import {Switch, Route} from 'react-router-dom'
import Home from './component/Home';

function App() {
  return (

    <div className="App">

      <Switch>


      

      <Route path="/"  render = { (props)=> <Home {...props}/>} exact/>


        {/* <Route path='/login' >
          <Frontform />
        </Route> 
        
        hello*/}

        <Route path="/login"  render = { (props)=> <Frontform {...props}/>}/>
        
        <Route path='/formData'>
          <Display />
        </Route>


      </Switch>
      

      
    
    </div>
  );
}

export default App;
