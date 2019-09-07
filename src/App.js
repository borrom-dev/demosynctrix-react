import React from 'react';
import { Switch, Route} from "react-router-dom";
import PrivateRoute from './component/PrivateRoute';
import DashboardPage from './dashboard/DashboardPage';
import HomePage from './home/HomePage';
import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';
import JavaComponent from './java/JavaComponent';
import KotlinComponent from './kotlin/KotlinComponent';
import AndroidPage from './android/AndroidPage';
import {PageNotFound } from './component';
import FrontedRoute from './routes.js/FrontendRoute';


const App =() => (
    <Switch>
      <PrivateRoute path='/dashboard' component={DashboardPage}/>
      <FrontedRoute exact path='/android' component={AndroidPage}/>
      <FrontedRoute exact path='/java' component={JavaComponent}/>
      <FrontedRoute exact path='/kotlin' component={KotlinComponent}/>
      <Route exact path='/login' component={LoginPage}/>
      <Route exact path='/register' component={RegisterPage}/>
      <Route exact path='/' component={HomePage}/>
      <Route component = {PageNotFound}/>
    </Switch>
)
export default App;
