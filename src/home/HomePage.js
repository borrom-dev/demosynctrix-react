import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';

@inject('commonStore', 'authStore')
@observer
class HomePage extends React.Component {

	componentDidMount(){
		this.props.commonStore.getCars();
	}
	handleLogout = () => {
			this.props.authStore.logout()
			.then(()=> this.props.history.replace("/"));
	}

	render(){
		const {cars} = this.props.commonStore;
		return(
			<div>
				{cars.map((card, id)=>(<li key={id}>{card.model}</li>))}
				<Menu.Item name="logout" onClick={this.handleLogout}>
					<Icon name="power">Logout</Icon>
				</Menu.Item>
			</div>
		)
	}
}

export default HomePage;
