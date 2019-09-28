import React from 'react';
import { inject, observer } from 'mobx-react';
import {Container} from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';
import CodeBlock from '../component/CodeBlock';

const parseHtml = htmlParser({
	isValidNode: node => node.type !== 'script',
})

@inject('articleStore')
@observer
class BlogTemplate extends React.Component {

	componentDidMount(){
		const {params} = this.props.match;
		this.props.articleStore.getArticleById(params.id);
	}
	render(){
		const {currentArticle} = this.props.articleStore;
		return(<Container>
			<ReactMarkdown
			source={currentArticle.body}
			escapeHtml={false}
			renderers={{code: CodeBlock}}
			astPlugins={[parseHtml]}
			/>
		</Container>);
	}
}

export default BlogTemplate;