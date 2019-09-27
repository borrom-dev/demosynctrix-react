import React from 'react';
import { inject } from 'mobx-react';
import {Container} from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';

@inject('articleStore')
class BlogTemplate extends React.Component {

	componentDidMount(){
		const {params} = this.props.match;
		this.props.articleStore.getArticleById(params.id);
	}
	render(){
		const {params} = this.props.match;
		const {currentArticle} = this.props.articleStore;
		return(<Container>
			<ReactMarkdown
			source={currentArticle.body}
			escapeHtml={false}
			/>
		</Container>);
	}
}

export default BlogTemplate;