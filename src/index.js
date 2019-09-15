import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'mobx-react';
import {configure} from 'mobx';
import stores from './store/store';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
const history = createBrowserHistory();

window._____APP_STATE_____ = stores;

configure({enforceActions: "always"})

ReactDOM.render(
<Provider {...stores}>
	<Router history={history}>
	<App/>
	</Router>
 </Provider>,
 document.getElementById('root'));