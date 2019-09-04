import React from 'react';
import  HomePage from "./home/HomePage";
import { Switch, Route} from "react-router-dom";
import LoginPage from './login/LoginPage';
import PrivateRoute from './component/PrivateRoute';
import RegisterForm from './register/RegisterPage';
const App =() => (
    <Switch>
      <Route path="/register" component={RegisterForm}/>
      <Route path="/login" component={LoginPage}/>
      <PrivateRoute path="/" exact component={HomePage}/>
    </Switch>
)

export default App;
