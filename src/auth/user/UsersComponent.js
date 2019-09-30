import React from 'react'
import {
	Header,
	Container,
	Table,
	Divider,
	Button
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

	render(){
		const {users} = this.props.userStore;
		const {open, username, selectedId} = this.state;
		return(
			<Container>
				 <Link to='/dashboard/new-user'>
				 	<Button primary floated='right'>New</Button>
				 </Link>
				 <Link to={`/dashboard/edit-user/${selectedId}`}>
				 	<Button positive floated='right' disabled={!selectedId}>Edit</Button>
				 </Link>
				 <Header as='h1' style={{marginTop: 20}}>Users</Header>
                 <Divider clearing/>
				<Table celled>
					<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Name</Table.HeaderCell>
						<Table.HeaderCell>Email</Table.HeaderCell>
						<Table.HeaderCell>Status</Table.HeaderCell>
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
			</Container>
		)
	}
}

export default UsersComponent;