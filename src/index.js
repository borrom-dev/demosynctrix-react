import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'mobx-react';
import {Store} from './store/store';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import api from './service/api';

const history = createBrowserHistory();

// window._____APP_STATE_____ = store;

const fetcher = url => api.get(url).then(res => res.data);

const poster = (url, payload) => api.post(url, payload).then(res => res.data);

const store = Store.create(
	{},
	 {
		 history: history,
		 fetch: fetcher,
		 post: poster,
		 alert: m => console.log(m)
	  }
)

// const history = {
// 	snapshots: observable.array([], {deep: false}),
// 	actions: observable.array([], {deep: false}),
// 	patches: observable.array([], {deep: false})
// }


ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
		<App/>
		</Router>
	</Provider>,
 document.getElementById('root'));

//  reaction(
// 	 () => store.view.currentUrl,
// 	 path => {
// 		 if(window.location.pathname != path) window.history.pushState(null, null, path)
// 	 }
//  )

//  const router = createRouter({
// 	 "/": store.view.openHomePage
//  })

//  window.onpopstate = function historyChange(ev){
// 	 if(ev.type === 'popstate') router(window.location.pathname);
//  }

//  window.store = store;

//  let recording = true;

//  onSnapshot(
// 	 store,
// 	 s => recording && history.snapshots.unshift({
// 		 data: s,
// 		 replay() {
// 			 recording = false;
// 			 applyAction(store, this.data)
// 			 recording = true;
// 		 }
// 	 })
//  )

//  history.snapshots.push({
// 	 data: getSnapshot(store),
// 	 replay(){
// 		 recording = false
// 		 applyAction(store, this.data)
// 		 recording = true;
// 	 }
//  })