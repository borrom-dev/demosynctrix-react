import React, {Component} from 'react';
import  HomePage from "./home/HomePage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from './login/LoginPage';

class App extends Component {

  constructor(props){
    super(props);
    localStorage.setItem("token", null);
  }
  render(){
    return(
      <div>
        <Router>
            <Switch>
              <Route path="/" exact restrict component={HomePage}/>
              <Route path="/login" component={LoginPage}/>
            </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
