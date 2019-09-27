import React from 'react';
import { inject } from 'mobx-react';

@inject('articleStore')
class BlogTemplate extends React.Component {

	componentDidMount(){
		const {params} = this.props.match;
		this.props.articleStore.getTopicArticles(params.id);
	}
	render(){
		const {params} = this.props.match;
		const {articles} = this.props.articleStore;
		const article = articles.data.find(x => x.id == params.id);
		return(<div>
			{article ? article.body : ''}
		</div>);
	}
}

export default BlogTemplate;