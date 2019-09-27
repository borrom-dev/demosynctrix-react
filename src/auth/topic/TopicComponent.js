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

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]


const converter = new Showdown.Converter({
			tables: true,
			simplifiedAutoLink: true,
			strikethrough: true,
			tasklists: true
		});

@inject('backendStore')
@observer
class PageComponent extends React.Component {

	state = {
		open: false,
		value: '',
		tab: 'write'
	}
	componentDidMount(){
		this.props.backendStore.getTopics();
	}

	show = () => this.setState({ open: true })

	handleTabChange = (tab = "write" | "preview") =>  this.setState({ tab });

	handleValueChange = (value) => this.setState({ value });

	render(){
		const {topics} = this.props.backendStore;
		const {open, value, tab} = this.state;
		return(
				<Container>
				<Card fluid>
							<Segment color='blue'>
								<Header floated='left'>Users</Header>
								<Button primary floated='right' onClick={this.show}>New</Button>
							
							</Segment>
						<Table celled>
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell>Title</Table.HeaderCell>
									<Table.HeaderCell>Path</Table.HeaderCell>
									<Table.HeaderCell>Action</Table.HeaderCell>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{topics.map((topic, id)=> (
									<Table.Row key={id}>
										<Table.Cell>{topic.name}</Table.Cell>
										<Table.Cell>{topic.url}</Table.Cell>
										<Table.Cell>{topic.role}</Table.Cell>
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
export default PageComponent;