import React from 'react';
import {Container} from 'semantic-ui-react'
import { inject, observer } from 'mobx-react';
import {Link} from 'react-router-dom';

@inject('frontendStore')
@observer
class HomeTemplate extends React.Component {

	componentDidMount(){
		//  this.props.frontendStore.getArticles(0);
	}
	render(){
		const {articles} = this.props.frontendStore;
		return(
			<Container>
				{articles.data.map((article, id) => (
				<Link key={id} to={`/articles/${article.id}/${article.slug}`}>{article.title}</Link>
				))}
			</Container>
			);
	}
}

export default HomeTemplate;