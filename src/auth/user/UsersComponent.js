import React from 'react'
import {
	Header,
	Container,
	Table,
	Divider,
	Button,
	Loader
 } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react';
import {Link} from 'react-router-dom';

@inject('userStore')
@observer
class UsersComponent extends React.Component {

	state = {
		username: '',
		password: '',
		selectedId: undefined
	}

	componentDidMount(){
		this.props.userStore.loadUsers();
	}
	show = () => this.setState({ open: true })

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleNavigate =(url) => {
		this.props.history.push(`/dashboard/${url}`);
	}

	render(){
		const {users, isLoading} = this.props.userStore;
		const {selectedId} = this.state;
		return(
			<>
				 {isLoading
				  ?
					<Loader active/>
				  :
					<Table celled>
						<Table.Header>
						<Table.Row>
							<Table.HeaderCell colSpan={3}>
								<Header as='h3' floated='left'>Users</Header>
								<Button primary floated='right' onClick={() => this.handleNavigate('new-user')}>New</Button>
								<Button positive floated='right' onClick={() => this.handleNavigate(`edit-user/${selectedId}`)} disabled={!selectedId}>Edit</Button>
							</Table.HeaderCell>
						</Table.Row>
						</Table.Header>
						<Table.Body>
							{users.map((user, id) => (
								<Table.Row warning={ selectedId === user.id} onClick={() => {this.setState({selectedId: user.id})}}>
									<Table.Cell>{user.username}</Table.Cell>
									<Table.Cell>{user.email}</Table.Cell>
									<Table.Cell>Active</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table>
				 }
			</>
		)
	}
}

export default UsersComponent;