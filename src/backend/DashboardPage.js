import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { inject, observer } from 'mobx-react';

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
			<Grid columns='three' divided>
				{recents.map((article, id) => (
					<Grid.Column>
						<Link to={`/articles/${article.slug}`}>{article.title}</Link>
      				</Grid.Column>
				))}
				</Grid>
			</Container>
		)
	}
}

export default DashboardPage;