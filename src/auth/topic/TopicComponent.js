import React from 'react'
import {
	GridColumn,
	Item,
	Grid,
	Header,
	Divider,
	Container,
	Button,
	Segment,
	Icon
 } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react';
import {Link} from 'react-router-dom';

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

	handleStatus = (topic) => {
		this.props.backendStore.updateTopicStatus(topic);
	}

	render(){
		const {topics} = this.props.backendStore;
		return(
			<Container>
				 <Header as='h1' floated='left'>Topic</Header>
				 <Link to='/dashboard/new-topic'>
				 	<Button positive floated='right'>New</Button>
				 </Link>
			<Divider clearing />
				<Grid columns={2}>
				{topics.map((topic, id) => (
					<GridColumn>
						<Segment clearing>
							<Item>
								<Item.Content>
									<Item.Header as='h1'><Icon name='checkmark' color={topic.status ? 'blue' : 'grey'}/> {topic.name}</Item.Header>
									<Item.Description>{topic.content}</Item.Description>
									<Link to={`/dashboard/edit-topic/${topic.id}`}>
										<Button primary floated='right' size='mini'>Edit</Button>
									</Link>
									<Button onClick={() => this.handleStatus(topic)} positive floated='right' size='mini'>{topic.status ? 'hide' : 'show'}</Button>
								</Item.Content>
							</Item>
						</Segment>
					</GridColumn>
				))}
				</Grid>
			</Container>
		)
	}
}
export default PageComponent;