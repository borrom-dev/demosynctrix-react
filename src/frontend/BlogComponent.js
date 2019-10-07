import React from 'react';
import { inject, observer } from 'mobx-react';
import { Loader} from 'semantic-ui-react';
import {Helmet} from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';
import CodeBlock from '../component/CodeBlock';
import InlineCode from '../component/InlineCode';

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
		const {currentArticle, isLoading} = this.props.articleStore;
		return(<>
		<Helmet>
			<title>{currentArticle.title}</title>
		</Helmet>
			{
			isLoading
			?  <Loader active/> 
			:  <ReactMarkdown
				source={currentArticle.body}
				escapeHtml={false}
				renderers={{code: CodeBlock, inlineCode: InlineCode}}
				astPlugins={[parseHtml]}
				/>
			}
		</>);
	}
}

export default BlogTemplate;