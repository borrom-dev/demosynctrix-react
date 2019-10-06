import React from 'react';
import {Container, Item} from 'semantic-ui-react'
import { inject, observer } from 'mobx-react';
import {Link} from 'react-router-dom';

@inject('frontendStore')
@observer
class HomeTemplate extends React.Component {

	componentDidMount(){
		 this.props.frontendStore.getRecentArticle();
	}
	render(){
		const {articles} = this.props.frontendStore;
		return(
			<Container>
				{articles.data.map((article, id) => (
					<Item style={{marginTop: '15px'}} key={id}>
						<Item.Content>
							<Item.Header as='h1'>
								<Link to={`/articles/${article.id}${article.slug}`}>{article.title}</Link>
							</Item.Header>
							<Item.Meta><span style={{fontSize: 14}}>{article.create_at}</span></Item.Meta>
							<Item.Description><p style={{fontSize: 18}}>{article.title}</p> </Item.Description>
						</Item.Content>
					</Item>
				))}
			</Container>
			);
	}
}

export default HomeTemplate;