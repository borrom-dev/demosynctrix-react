import React from 'react';
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
import {Loader} from 'semantic-ui-react';
import BlogComponent from './frontend/BlogComponent';
import NewArticleComponent from './auth/article/NewArticleComponent';
import EditArticleComponent from './auth/article/EditArticleComponent';
import NewTopicComponent from './auth/topic/NewTopicComponent';
import EditTopicComponent from './auth/topic/EditTopicComponent';
import EditUserComponent from './auth/user/EditUserComponent';
import NewUserComponent from './auth/user/NewUserComponent';
import HomeComponent from './frontend/HomeComponent';
import './style.css'


@inject('pageStore', 'authStore')
@observer
class App extends React.Component {

  componentDidMount(){
    this.props.pageStore.getPages()
  }
  render(){
    const {isLoading} = this.props.pageStore;
    if(isLoading){
      return (<Loader style={{marginTop: '4em'}} active inline='centered'/>)
    }
    return(
        <Switch>
          <Route exact path='/login' component={LoginPage}/>
          <AdminRoute exact path='/dashboard' component={DashboardPage}/>
          <AdminRoute exact path='/dashboard/users' component={UsersComponent}/>
          <AdminRoute exact path='/dashboard/new-user' component={NewUserComponent}/>
          <AdminRoute exact path='/dashboard/edit-user/:id' component={EditUserComponent}/>
          <AdminRoute exact path='/dashboard/topics' component={TopicComponent}/>
          <AdminRoute exact path='/dashboard/new-topic' component={NewTopicComponent}/>
          <AdminRoute exact path='/dashboard/edit-topic/:id' component={EditTopicComponent}/>
          <AdminRoute exact path='/dashboard/articles' component={ArticleComponent}/>
          <AdminRoute exact path='/dashboard/new-article' component={NewArticleComponent}/>
          <AdminRoute exact path='/dashboard/edit-article/:id' component={EditArticleComponent}/>
          <AdminRoute exact path='/dashboard/files' component={FileComponent}/>
          <FrontendRoute exact path='/articles/:id/:slug' component = {BlogComponent}/>
          <FrontendRoute exact path='/' component = {HomeComponent}/>
            {this.props.pageStore.topics.map((topic, id) => (
              <FrontendRoute exact key={id} path={topic.url} topic={topic} component={FrontendComponent}/>
            ))}
          <FrontendRoute component = {PageNotFound}/>
        </Switch>
    )
  }
}
export default App;
