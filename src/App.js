import React from 'react';
import  HomePage from "./home/HomePage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from './login/LoginPage';
const App =() => (
    <Router>
        <Switch>
          <Route path="/login" component={LoginPage}/>
          <Route path="/" exact component={HomePage}/>
        </Switch>
    </Router>
)
export default App;
