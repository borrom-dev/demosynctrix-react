import React from 'react';
import { inject, observer } from 'mobx-react';
import { Container } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

@inject('frontendStore')
@observer
class BlogPostTemplate extends React.Component {

	componentDidMount(){
		const {id} = this.props.topic;
		this.props.frontendStore.getAllPostByTopic(id)
	}

	render(){
		const {articles} = this.props.frontendStore;
		return(
			<Container>
				{ articles.map((article, id) => (
					<Link to={`/articles/${article.slug}`}>{article.title}</Link>
				))}		
			</Container>
		);
	}
}

export default BlogPostTemplate;