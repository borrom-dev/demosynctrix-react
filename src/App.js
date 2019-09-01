import React, {Component} from 'react';
import Login from './login/login_page'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {

  render(){
    return(
      <div>
        <Router>
            <Switch>
              <Route path="/" component={Login}/>
              <Route path="/login" component={Login}/>
            </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
