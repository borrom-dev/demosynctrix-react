import React from 'react';
import  HomePage from "./home/HomePage";
import { Switch, Route, Router } from "react-router-dom";
import LoginPage from './login/LoginPage';
import PrivateRoute from './component/PrivateRoute';
import {createBrowserHistory} from 'history'
const history = createBrowserHistory()

const App =() => (
    <Router history={history}>
        <Switch>
          <Route path="/login" component={LoginPage}/>
          <PrivateRoute path="/" exact component={HomePage}/>
        </Switch>
    </Router>
)

export default App;
