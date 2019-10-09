import React from 'react'
import {
	Header,
	Button,
	Divider,
	Pagination,
	Loader,
	Table,
	Input,
	Label,
	Item
 } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react';


@inject('backendStore', 'pageStore')
@observer
class ArticlesComponent extends React.Component {

	state = {
		selected: undefined,
		activePage: 1
	}
	componentDidMount(){
		const {active} = this.state;
		this.props.backendStore.getArticles(active - 1);
	}

	publish = (article)=> {
		this.props.backendStore.publishArticle(article);
	}

	handlePageChnage = (e, data) => {
		const {activePage} = data;
		this.props.backendStore.getArticles(activePage - 1);
		this.setState({activePage: data.activePage});
	}

	handleCellClick = (value) => {
		this.setState({selected: value});
	}

	navigateTo = (url) => {
		this.props.history.push(`/dashboard/${url}`);
	}

	render(){
		const {articles, isLoading} = this.props.backendStore;
		const {selected, activePage} = this.state; 
		return(
			<>
			{isLoading ? <Loader inline='centered' active/> :	
			<Table celled selectable>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell colSpan={3} >
							<Label as='h3' size='large' color='blue' ribbon>Articles</Label>
							<Input size='small' floated/>
							<Button size='small' floated='right' primary onClick={() => this.navigateTo("new-article")}>New</Button>
							<Button size='small' secondary disabled={selected === undefined} onClick={() => {
								this.props.history.push(`/articles/${selected.id}${selected.slug}`)
							}} floated='right'>Preview</Button>
							<Button positive size='small' onClick={() => this.navigateTo(`edit-article/${selected.id}`)} disabled={selected === undefined} floated='right'>Edit</Button>
						</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{articles.data.map((article, id) => (
						<Table.Row active={selected ? article.id === selected.id : false} primary onClick={() => this.handleCellClick(article)} key={id}>
							<Table.Cell collapsing>{article.published ? <Label ribbon color='blue'>Live</Label> : ''} {article.title}</Table.Cell>
							<Table.Cell>{article.slug}</Table.Cell>
							<Table.Cell collapsing>{article.create_at}</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>

				<Table.Footer>
					<Table.Row>
						<Table.HeaderCell colSpan='3'>
							<Pagination
								floated='right'
								defaultActivePage={1}
								activePage={activePage}
								firstItem={null}
								lastItem={null}
								siblingRange={1}
								onPageChange={this.handlePageChnage}				
								totalPages={articles.totalPage}
							/>
						</Table.HeaderCell>
					</Table.Row>
				</Table.Footer>
			</Table>
			}
			<Divider style={{paddingTop: 20, paddingBottom: 20}} clearing horizontal>Demotrix</Divider>
			</>
		)
	}
}

export default ArticlesComponent;