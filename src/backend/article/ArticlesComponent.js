import React from 'react'
import {
	Icon,
	Segment,
	Modal,
	Header,
	Menu,
	Table,
	Container,
	Card,
	Button,
	Form,
	Select
 } from 'semantic-ui-react'
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import ReactMde from "react-mde";
import { inject, observer } from 'mobx-react';

const converter = new Showdown.Converter({
			tables: true,
			simplifiedAutoLink: true,
			strikethrough: true,
			tasklists: true
		});

@inject('postStore')
@observer
class ArticlesComponent extends React.Component {

	state = {
		open: false,
		value: '',
		tab: 'write'
	}
	componentDidMount(){
		// this.props.userStore.loadUsers();
	}

	show = () => this.setState({ open: true })

	handleTabChange = (tab = "write" | "preview") =>  this.setState({ tab });

	handleValueChange = (value) => this.setState({ value });

	render(){
		const {posts} = this.props.postStore;
		const {open, value, tab} = this.state;
		return(
				<Container>
				<Card fluid>
							<Segment color='blue'>
								<Header floated='left'>Users</Header>
								<Button primary floated='right' onClick={this.show}>New</Button>
								<Modal size ='large' open={open}>
									<Modal.Header>Create Page</Modal.Header>
          					<Modal.Content>
											<Modal.Description>
												<Form>
													<Form.Field>
										      	<label>Title</label>
										      	<input
															 name="title"
															 onChange={this.handleChange}
															 value={''}/>
										    	</Form.Field>
													<Form.Field>
										      	<label>Url</label>
										      	<input
															 name="url"
															 onChange={this.handleChange}
															 value={''}/>
										    	</Form.Field>
													<Form.Field>
										      	<label>Name</label>
										      	<input
															 name="name"
															 onChange={this.handleChange}
															 value={''}/>
										    	</Form.Field>
													<Form.Group widths='equals'>
														<Form.Field
												        control={Select}
												        options={''}
																label='Order'
												        search
												      />
											      <Form.Field
											        control={Select}
											        options={''}
															label='by'
											        search
											      />
											    </Form.Group>
													<ReactMde
											        value={value}
															onChange={this.handleValueChange}
											        selectedTab={tab}
															onTabChange={this.handleTabChange}
											        generateMarkdownPreview={markdown =>
											          Promise.resolve(converter.makeHtml(markdown))
											        }
											      />
												</Form>
											</Modal.Description>
          					</Modal.Content>
										<Modal.Actions>
					            <Button negative onClick={()=> {
													this.setState({open: false})
											}}>Cancel</Button>
					            <Button positive onClick={()=> {
													this.setState({open: false})
											}}>Save</Button>
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
								{posts.map((user, id)=> (
									<Table.Row>
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

export default ArticlesComponent;