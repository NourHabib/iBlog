import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import ProjectDetails from './components/projects/projectDetails';
import signIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import CreateProject from './components/projects/createProject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
              <Route exact path='/' component={Dashboard}/>
              <Route path='/project/:id' component={ProjectDetails}/> 
              <Route path='/signin' component={signIn} />
              <Route path='/signup' component={SignUp} />
              <Route path='/create' component={CreateProject}/>
              
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
