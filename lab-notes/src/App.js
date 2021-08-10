import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './views/Home.jsx';
import Login from './views/Login.jsx';
import MainPage from './views/MainPage.jsx';
import Signup from './views/Signup.jsx';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/mainpage' component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
