import React from 'react'
import {
	GridColumn,
	Item,
	Grid,
	Header,
	Divider,
	Container,
	Button
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

	render(){
		const {topics} = this.props.backendStore;
		return(
			<Container>
				 <Header as='h1' floated='left'>Topic</Header>
				 <Button primary floated='right'>New</Button>
			<Divider clearing />
				<Grid columns={2}>
				{topics.map((topic, id) => (
					<GridColumn>
							<Item>
								<Item.Content>
									<Item.Header as='h1'><Link>{topic.name}</Link></Item.Header>
									<Item.Description>{topic.content}</Item.Description>
								</Item.Content>
							</Item>
					</GridColumn>
				))}
				</Grid>
			</Container>
		)
	}
}
export default PageComponent;