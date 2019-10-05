import React from 'react'
import {
	Grid,
	GridColumn,
	Header,
	Container,
	Button,
	Item,
	Divider,
	Radio,
	Pagination,
	Segment,
	Label
 } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react';
import {Link} from 'react-router-dom';


@inject('backendStore', 'pageStore')
@observer
class ArticlesComponent extends React.Component {

	componentDidMount(){
		this.props.backendStore.getArticles(0);
	}

	publish = (article)=> {
		this.props.backendStore.publishArticle(article);
	}

	render(){
		const {articles} = this.props.backendStore;
		return(
			<Container>
			<Header as='h1' floated='left'>Article</Header>
			<Link to='/dashboard/new-article'><Button positive floated='right'>New</Button>
			</Link>
			<Divider clearing />
				<Grid columns={2}>
				{articles.data.map((article, id) => (
					<GridColumn key={id}>
						<Segment clearing>
							<Item>
								<Header as='h1'><Link to={`/articles/${article.id}${article.slug}`}>{article.title}</Link></Header>
								<Item.Description>{article.description}</Item.Description>
								<Item.Meta style={{marginTop: 15}}>
									<Button size='mini' positive floated='right' onClick={() => {
										this.props.history.push(`/dashboard/edit-article/${article.id}`)
									}}>Edit</Button>
									<Button size='mini' primary onClick={() => this.publish(article)} floated='right'>{article.published ? 'draft' : 'go live'}</Button>
								</Item.Meta>
							</Item>
						</Segment>
					</GridColumn>
				))}
				</Grid>
			</Container>
		)
	}
}

export default ArticlesComponent;