import React from 'react';
import { inject, observer } from 'mobx-react';
import { Container, Grid, Header, Loader, Item } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import { PageView } from '../component/PageView';

@inject('frontendStore')
@observer
class BlogPostTemplate extends React.Component {

	componentDidMount(){
		PageView()
		const {id} = this.props.topic;
		this.props.frontendStore.getAllPostByTopic(id)
	}

	render(){
		const {articles, isLoading} = this.props.frontendStore;
		const {topic} = this.props;
		const {data} = articles;
		return(
			<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{`${topic.name} Tutorial | Demotrix`}</title>
			</Helmet>
			<Container>
				{ isLoading
				? <Loader/>
				:  data.map((article, id) => (
						<Item style={{marginTop: '15px'}} key={id}>
							<Item.Content>
								<Item.Header as='h1'>
									<Link to={`/articles/${article.id}${article.slug}`}>{article.title}</Link>
								</Item.Header>
								<Item.Meta><span style={{fontSize: 14}}>{article.create_at}</span></Item.Meta>
								<Item.Description><p style={{fontSize: 18}}>{article.description}</p> </Item.Description>
							</Item.Content>
						</Item>
					))
				}	
			</Container>
		   </>
		);
	}
}

export default BlogPostTemplate;