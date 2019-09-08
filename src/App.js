import React from 'react';
import { Switch, Route} from "react-router-dom";
import {AdminRoute, FrontendRoute} from './routes';
import DashboardPage from './dashboard/DashboardPage';
import HomePage from './home/HomePage';
import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';
import JavaComponent from './java/JavaComponent';
import KotlinComponent from './kotlin/KotlinComponent';
import AndroidPage from './android/AndroidPage';
import {PageNotFound } from './component';
import FileComponent from './files/FileComponent';
import PageComponent from './page/PageComponent';
import UsersComponent from './user/UsersComponent';
import ArticlesComponent from './article/ArticlesComponent';

const App =() => (
    <Switch>
      <Route exact path='/login' component={LoginPage}/>
      <Route exact path='/register' component={RegisterPage}/>
      <AdminRoute path='/dashboard' component={DashboardPage}/>
      <AdminRoute path='/users' component={UsersComponent}/>
			<AdminRoute path='/pages' component={PageComponent}/>
      <AdminRoute path='/articles' component={ArticlesComponent}/>
			<AdminRoute path='/files' component={FileComponent}/>
      <FrontendRoute exact path='/android' component={AndroidPage}/>
      <FrontendRoute exact path='/java' component={JavaComponent}/>
      <FrontendRoute exact path='/kotlin' component={KotlinComponent}/>
      <FrontendRoute exact path='/' component={HomePage}/>
      <FrontendRoute component = {PageNotFound}/>
    </Switch>
)
export default App;
