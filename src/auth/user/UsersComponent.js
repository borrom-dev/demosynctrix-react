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
				<Card fluid>
							<Segment color='blue'>
								<Header floated='left'>Users</Header>
								<Button primary floated='right' onClick={this.show}>New</Button>
								<Modal size ='small' open={open}>
									<Modal.Header>Create User</Modal.Header>
          					<Modal.Content>
										<Form size='large' onSubmit={this.register}>
							        <Segment stacked>
							          <Form.Input
													fluid icon='user'
													iconPosition='left'
													placeholder='E-mail address'
													name="username"
													value={username}
													onChange={this.handleChange} />
							          <Form.Input
							            fluid
							            icon='lock'
							            iconPosition='left'
							            placeholder='Password'
							            type='password'
													name="password"
													value={password}
													onChange={this.handleChange} />
							          <Button color='teal' fluid size='large'>
							            Register
							          </Button>
							        </Segment>
							      </Form>
          					</Modal.Content>
										<Modal.Actions>
					            <Button negative onClick={()=> {
													this.setState({open: false})
											}}>No</Button>
					            <Button positive onClick={()=> {
													this.setState({open: false})
											}}>Yes</Button>
					          </Modal.Actions>
								</Modal>
							</Segment>
						<Table celled>
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell>No</Table.HeaderCell>
									<Table.HeaderCell>Username</Table.HeaderCell>
									<Table.HeaderCell>Role</Table.HeaderCell>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{users.map((user, id)=> (
									<Table.Row key={id}>
										<Table.Cell>{user.id}</Table.Cell>
										<Table.Cell>{user.username}</Table.Cell>
										<Table.Cell>{user.role}</Table.Cell>
									</Table.Row>
								))}
							</Table.Body>

							<Table.Footer>
								<Table.Row>
									<Table.HeaderCell colSpan='3'>
										<Menu floated='right' pagination>
											<Menu.Item as='a' icon>
												<Icon name='chevron left' />
											</Menu.Item>
											<Menu.Item as='a'>1</Menu.Item>
											<Menu.Item as='a'>2</Menu.Item>
											<Menu.Item as='a'>3</Menu.Item>
											<Menu.Item as='a'>4</Menu.Item>
											<Menu.Item as='a' icon>
												<Icon name='chevron right' />
											</Menu.Item>
										</Menu>
									</Table.HeaderCell>
								</Table.Row>
							</Table.Footer>
						</Table>
					</Card>
				</Container>
		)
	}
}

export default UsersComponent;