import React from 'react';
import { Container, Grid, Image, Item, Segment, Label } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import {Link} from 'react-router-dom';

@inject('backendStore')
@observer
class DashboardPage extends React.Component {

	componentDidMount(){
		this.props.backendStore.getRecentArticles();
	}
	render(){
		const {recents} = this.props.backendStore;
		return(
			<Container>
			<Grid columns={2}>
				{recents.map((article, id) => (
					<Grid.Column>
						<Segment raised>
							<Label color='teal' ribbon><Link to={`/articles/${article.id}/${article.slug}`} style={{fontSize: 18}}>{article.title}</Link></Label>
							<p style={{margin: 20}}>{article.body}</p>	
						</Segment>
      				</Grid.Column>
				))}
				</Grid>
			</Container>
		)
	}
}

export default DashboardPage;