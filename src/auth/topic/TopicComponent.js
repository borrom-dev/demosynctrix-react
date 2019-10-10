import React from 'react'
import {
	Label,
	Input,
	Button,
	Loader,
	Table
 } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react';

@inject('backendStore')
@observer
class PageComponent extends React.Component {

	state = {
		open: false,
		value: '',
		tab: 'write',
		selected: undefined
	}
	componentDidMount(){
		this.props.backendStore.getTopics();
	}

	show = () => this.setState({ open: true })

	handleTabChange = (tab = "write" | "preview") =>  this.setState({ tab });

	handleValueChange = (value) => this.setState({ value });

	navigateTo = (url) => {
		this.props.history.push(`/dashboard/${url}`);
	}

	handleCellClick = (value) => {
		this.setState({selected: value});
	}

	render(){
		const {topics, isLoading} = this.props.backendStore;
		const {selected} = this.state;
		return(
			<>
				{isLoading
				 ? <Loader active/>
				 : <Table celled selectable>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell colSpan={3} >
									<Label as='h3' size='large' color='blue' ribbon>Topics</Label>
									<Input size='small' action={{ icon: 'search' }} placeholder='Search...' floated/>
									<Button size='small' floated='right' primary onClick={() => this.navigateTo("new-topic")}>New</Button>
									<Button size='small' secondary disabled={selected === undefined} onClick={() => {
										this.props.history.push(`/${selected.name}`)
									}} floated='right'>Preview</Button>
									<Button positive size='small' onClick={() => this.navigateTo(`edit-topic/${selected.id}`)} disabled={selected === undefined} floated='right'>Edit</Button>
								</Table.HeaderCell>
							</Table.Row>
					</Table.Header>
					<Table.Body>
						{topics.map((topic, id) => (
							<Table.Row active={selected ? topic.id === selected.id : false} primary onClick={() => this.handleCellClick(topic)} key={id}>					
								<Table.Cell collapsing>{topic.status ? <Label color='blue' ribbon>Live</Label> : '' } {topic.name}</Table.Cell>
								<Table.Cell>{topic.url}</Table.Cell>
								<Table.Cell collapsing>{topic.createdAt}</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
					</Table>
				}
			</>
		)
	}
}
export default PageComponent;