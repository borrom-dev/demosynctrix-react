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
		const {data} = articles;
		return(
			<Container>
				{ data.map((article, id) => (
					<Link key={id} to={`/articles/${article.id}/${article.slug}`}>{article.title}</Link>
				))}		
			</Container>
		);
	}
}

export default BlogPostTemplate;