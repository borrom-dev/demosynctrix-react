import React from 'react';
import { Switch, Route} from "react-router-dom";
import {AdminRoute, FrontendRoute} from './routes';
import DashboardPage from './dashboard/DashboardPage';
import PageComponent from './home/PageComponent';
import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';
import {PageNotFound } from './component';
import FileComponent from './files/FileComponent';
import UsersComponent from './user/UsersComponent';
import ArticlesComponent from './article/ArticlesComponent';

const App =() => (
    <Switch>
      <Route exact path='/login' component={LoginPage}/>
      <Route exact path='/register' component={RegisterPage}/>
      <AdminRoute path='/dashboard' component={DashboardPage}/>
      <AdminRoute path='/dashboard/users' component={UsersComponent}/>
			<AdminRoute path='/dashboard/pages' component={PageComponent}/>
      <AdminRoute path='/dashboard/articles' component={ArticlesComponent}/>
			<AdminRoute path='/dashboard/files' component={FileComponent}/>
      <FrontendRoute exact path='/android' component={PageComponent}/>
      <FrontendRoute exact path='/java' component={PageComponent}/>
      <FrontendRoute exact path='/kotlin' component={PageComponent}/>
      <FrontendRoute exact path='/' component={PageComponent}/>
      <FrontendRoute component = {PageNotFound}/>
    </Switch>
)
export default App;
