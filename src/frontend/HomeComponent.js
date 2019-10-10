import React from 'react';
import { inject, observer } from 'mobx-react';
import {Item} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import { PageView } from '../component/PageView';

@inject('frontendStore')
@observer
class HomeComponent extends React.Component {

	componentDidMount(){
		 PageView()
		 this.props.frontendStore.getRecentArticle();
	}
	render(){
		const {articles} = this.props.frontendStore;
		return(<>
				{articles.data.map((article, id) => (
					<Item style={{marginTop: '15px'}} key={id}>
						<Item.Content>
							<Item.Header as='h1'>
								<Link to={`/articles/${article.id}${article.slug}`}>{article.title}</Link>
							</Item.Header>
							<Item.Meta><span style={{fontSize: 14}}>{article.create_at}</span></Item.Meta>
							<Item.Description><p>{article.description}</p> </Item.Description>
						</Item.Content>
					</Item>
				))}
			</>);
	}
}

export default HomeComponent;