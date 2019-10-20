import React from 'react'
import {
	Card,
	Table,
	Grid
 } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react';
import {ProfileComponent} from '../../component/ProfileComponent';

// @inject('backendStore')
// @observer
// class PageComponent extends React.Component {

// 	state = {
// 		open: false,
// 		value: '',
// 		tab: 'write',
// 		selected: undefined
// 	}
// 	componentDidMount(){
// 		this.props.backendStore.getTopics();
// 	}

// 	show = () => this.setState({ open: true })

// 	handleTabChange = (tab = "write" | "preview") =>  this.setState({ tab });

// 	handleValueChange = (value) => this.setState({ value });

// 	navigateTo = (url) => {
// 		this.props.history.push(`/dashboard/${url}`);
// 	}

// 	handleCellClick = (value) => {
// 		this.setState({selected: value});
// 	}

// 	render(){
// 		const {topics, isLoading} = this.props.backendStore;
// 		const {selected} = this.state;
// 		return(
// 			<>
// 				<Grid>
// 					<Grid.Column width={4}>
// 						<Table selectable basic='very'>
// 							<Table.Body>
// 								{topics.map((topic, id) => (
// 									<Table.Row active={selected ? topic.id === selected.id : false} primary onClick={() => this.handleCellClick(topic)} key={id}>					
// 										<Table.Cell collapsing>{topic.name}</Table.Cell>
// 									</Table.Row>
// 								))}
// 							</Table.Body>
// 						</Table>
// 					</Grid.Column>
// 					<Grid.Column width={12}>
// 						<ProfileComponent title={selected ? selected.name : ''}/>
// 						<Card.Group>
// 							<Card>
// 								<Card.Content>
// 									<Card.Header content='Jake Smith' />
// 									<Card.Meta content='Musicians' />
// 									<Card.Description content='Jake is a drummer living in New York.' />
// 								</Card.Content>
// 							</Card>
// 							<Card>
// 								<Card.Content>
// 									<Card.Header content='Jake Smith' />
// 									<Card.Meta content='Musicians' />
// 									<Card.Description content='Jake is a drummer living in New York.' />
// 								</Card.Content>
// 							</Card>
// 						</Card.Group>
// 					</Grid.Column>
// 				</Grid>
// 			</>
// 		)
// 	}
// }

const PageComponent = inject('store')(
	observer(({store: {topicStore}}) => {

		return(
			<>

			</>
		)
	})
)


export default PageComponent;