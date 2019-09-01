import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import authHelper from '../helper/login_helper';
import { Menu, Icon } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';

@inject("homeStore")
@observer
class HomePage extends Component {
	constructor(props){
		super(props);
		const {homeStore} = this.props;
		homeStore.getCars();
	}
	handleLogout = history => ()=> {
			localStorage.removeItem("token");
			console.log(history);
			history.push("/login");
	}

	render(){
		const {history, homeStore} = this.props
		if(!authHelper.isLoggedIn()){
			return <Redirect to="/login"/>
		}
		return(
			<div>
				{homeStore.cars.map(
					(car, id) =><li key={id}>{car.model}</li>
				)}
				<Menu.Item name="logout" onClick={this.handleLogout(history)}>
					<Icon name="power">Logout</Icon>
				</Menu.Item>
			</div>
		)
	}
}

export default HomePage;