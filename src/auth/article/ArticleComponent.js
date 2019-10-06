import React from 'react'
import {
	Grid,
	GridColumn,
	Header,
	Container,
	Button,
	Item,
	Divider,
	Pagination,
	Segment,
	Search,
	Loader
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

	handlePageChnage = (e, data) => {
		const {activePage} = data;
		this.props.backendStore.getArticles(activePage - 1);
	}

	render(){
		const {articles, isLoading} = this.props.backendStore;
		return(
			<Container>
			<Grid>
				<Grid.Column width={2} >
					<Header as='h1' floated='left'>Article</Header>
				</Grid.Column>
				<Grid.Column width={9}>
					<Search showNoResults={false} floated='left'/>
				</Grid.Column>
				<Grid.Column width={5}>
				<Link to='/dashboard/new-article'><Button positive floated='right'>New</Button></Link>
				</Grid.Column>
			</Grid>	
			
			<Divider clearing inverted/>
			{isLoading
			 ?
			<Loader active inline='centered'/>
			 :
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
			}
			<Pagination style={{marginTop: 20, marginBottom: 20}}
				floated='right'
				defaultActivePage={1}
				firstItem={null}
				lastItem={null}
				siblingRange={1}
				onPageChange={this.handlePageChnage}
				totalPages={articles.totalPage}
			/>
			<Divider style={{paddingTop: 20, paddingBottom: 20}} clearing horizontal>Demotrix</Divider>
			</Container>
		)
	}
}

export default ArticlesComponent;