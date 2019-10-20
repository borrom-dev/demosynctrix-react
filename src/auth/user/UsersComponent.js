import React from 'react'
import {
	Header,
	List,
	Table,
	Image,
	Card,
	Loader,
	Grid,
	Container,
	Divider
 } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react';

const UsersComponent = inject('store')(
	observer(({store: {userStore}}) => {
		return (
			<Grid>
				{userStore.isLoading ? <Loader active/>
				:
				  <> 
					<Grid.Column width={4}>
						<Table celled selectable basic='very'>
							<Table.Body>
								{userStore.users.map((user, id) => (
									<Table.Row key={id} active={userStore.selectedUser.id === user.id}>
										<Table.Cell>{user.username}</Table.Cell>
									</Table.Row>
							))}
							</Table.Body>
						</Table>
					</Grid.Column>
						<Grid.Column width={12}>
						<Container clearing>
							<Header as='h2' floated='left'>
								<Image style={{width: '2.5em', height: '2.5em', borderRadius: '500rem'}} src='https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
								<Header.Content>{userStore.selectedUser.username}
									<Header.Subheader>borrom.dev@gmail.com</Header.Subheader>
									<Header.Subheader>Borrom Sync</Header.Subheader>
								</Header.Content>
						</Header>
						</Container>
						<Divider basic clearing/>
						<Container style={{marginTop: '20px'}}>
							<Card.Group>
								<Card>
									<Card.Content>
									<Card.Header>Matthew Harris</Card.Header>
									<Card.Meta>Co-Worker</Card.Meta>
									<Card.Description>
										Matthew is a pianist living in Nashville.
									</Card.Description>
									</Card.Content>
								</Card>
								<Card>
								<Card.Content>
									<Card.Header content='Jake Smith' />
								<Card.Meta content='Musicians' />
									<Card.Description content='Jake is a drummer living in New York.' />
									</Card.Content>
								</Card>
							</Card.Group>
						</Container>
					</Grid.Column>
					</>
				}
			</Grid>
		)
	})
)

export default UsersComponent;