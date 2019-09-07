import React from 'react';
import { Switch, Route} from "react-router-dom";
import PrivateRoute from './component/PrivateRoute';
import DashboardPage from './dashboard/DashboardPage';
import HomePage from './home/HomePage';


const App =() => (
    <Switch>
      <PrivateRoute exact path='/dashboard' component={DashboardPage}/>
      <Route exact path='/android' component={HomePage}/>
      <Route exact path='/java' component={HomePage}/>
      <Route exact path='/kotlin' component={HomePage}/>
      <Route exact path='/' component={HomePage}/>
    </Switch>
)
export default App;
