import React from 'react'
import {
	Icon,
	Segment,
	Form,
	Modal,
	Header,
	Menu,
	Table,
	Container,
	Card,
	Button
 } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react';

@inject('userStore')
@observer
class UsersComponent extends React.Component {

	state = {
		username: '',
		password: '',
		open: false
	}

	componentDidMount(){
		this.props.userStore.loadUsers();
	}
	show = () => this.setState({ open: true })

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	render(){
		const {users} = this.props.userStore;
		const {open, username, password} = this.state;
		return(
			<Container>
			
			</Container>
		)
	}
}

export default UsersComponent;