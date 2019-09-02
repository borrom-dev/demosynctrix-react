import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import authHelper from '../helper/login_helper';
import { Menu, Icon } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';

@inject('homeStore')
@observer
class HomePage extends Component {

	componentDidMount(){
			const {homeStore} = this.props;
			homeStore.getCars();
	}

	handleLogout(history) {
			localStorage.removeItem("token");
			history.push("/login");
	}

	render(){
		const {history} = this.props
		if(!authHelper.isLoggedIn()){
			return <Redirect to="/login"/>
		}
		return(
			<div>
				<Menu.Item name="logout" onClick={() => this.handleLogout(history)}>
					<Icon name="power">Logout</Icon>
				</Menu.Item>
			</div>
		)
	}
}

export default HomePage;