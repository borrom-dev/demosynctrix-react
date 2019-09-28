import React from 'react';
import { inject, observer } from 'mobx-react';
import { Container, Grid, Header, Label, Item } from 'semantic-ui-react';
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
						<Item style={{marginTop: '15px'}}>
						<Item.Content>
							<Item.Header as='h1'>
								<Link to={`/articles/${article.id}/${article.slug}`}>{article.title}</Link>
							</Item.Header>
							<Item.Meta><span style={{fontSize: 14}}>{article.create_at}</span></Item.Meta>
							<Item.Description><p style={{fontSize: 18}}>{article.body}</p> </Item.Description>
						</Item.Content>
						</Item>
				))}		
		   </Container>
		);
	}
}

export default BlogPostTemplate;