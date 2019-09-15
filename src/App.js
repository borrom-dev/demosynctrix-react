import React from 'react';
import { Switch, Route} from "react-router-dom";
import {AdminRoute, FrontendRoute} from './routes';
import DashboardPage from './backend/DashboardPage';
import TopicComponent from './backend/topic/TopicComponent';
import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';
import {PageNotFound } from './component';
import FileComponent from './backend/file/FileComponent';
import UsersComponent from './backend/user/UsersComponent';
import ArticlesComponent from './backend/article/ArticlesComponent';
import FrontendComponent from './frontend/FrontendComponent';
import { inject, observer } from 'mobx-react';
import {Loader} from 'semantic-ui-react';


@inject('pageStore')
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
          <Route exact path='/register' component={RegisterPage}/>
          <AdminRoute exact path='/dashboard' component={DashboardPage}/>
          <AdminRoute exact path='/dashboard/users' component={UsersComponent}/>
          <AdminRoute exact path='/dashboard/topics' component={TopicComponent}/>
          <AdminRoute exact path='/dashboard/articles' component={ArticlesComponent}/>
          <AdminRoute exact path='/dashboard/files' component={FileComponent}/>
            {this.props.pageStore.topics.map((topic, id) => (
              <FrontendRoute exact key={id} path={topic.url} component={FrontendComponent}/>
            ))}
          <FrontendRoute component = {PageNotFound}/>
        </Switch>
    )
  }
}
export default App;
