import React from 'react';
import ReactGA from 'react-ga';
import { Switch, Route} from "react-router-dom";
import {AdminRoute, FrontendRoute} from './routes';
import DashboardPage from './auth/DashboardPage';
import TopicComponent from './auth/topic/TopicComponent';
import LoginPage from './login/LoginPage';
import {PageNotFound } from './component';
import FileComponent from './auth/file/FileComponent';
import UsersComponent from './auth/user/UsersComponent';
import ArticleComponent from './auth/article/ArticleComponent';
import FrontendComponent from './frontend/FrontendComponent';
import { inject, observer } from 'mobx-react';
import BlogComponent from './frontend/BlogComponent';
import NewArticleComponent from './auth/article/NewArticleComponent';
import EditArticleComponent from './auth/article/EditArticleComponent';
import NewTopicComponent from './auth/topic/NewTopicComponent';
import EditTopicComponent from './auth/topic/EditTopicComponent';
import EditUserComponent from './auth/user/EditUserComponent';
import NewUserComponent from './auth/user/NewUserComponent';
import HomeComponent from './frontend/HomeComponent';
import './style.css'


class App extends React.Component {

  render(){
    return(
        <Switch>
          <AdminRoute exact path='/dashboard' component={DashboardPage} />
          <AdminRoute exact path='/dashboard/users' component={UsersComponent} />
          <AdminRoute exact path='/dashboard/articles' component={ArticleComponent} />
          <AdminRoute exact path='/dashboard/pages' component={TopicComponent} />
          <AdminRoute exact path='/dashboard/files' component={FileComponent} />
          <Route exact path='/login' component={LoginPage}/>
          <FrontendRoute exact path='/' component={HomeComponent} />
          <Route component={PageNotFound}/>
        </Switch>
    )
  }
}
export default App;
