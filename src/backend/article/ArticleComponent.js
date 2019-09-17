import React from 'react'
import {
	Segment,
	Header,
	Table,
	Container,
	Card,
	Button,
	Pagination
 } from 'semantic-ui-react'
import "react-mde/lib/styles/css/react-mde-all.css";
import { inject, observer } from 'mobx-react';
import EditArticleComponent from './EditArticleComponent';

@inject('backendStore')
@inject('pageStore')
@observer
class ArticlesComponent extends React.Component {

	state = {
		open: false,
		tab: 'write',
		topicId: 0,
		topics: [],
		activePage: 1,
		article: {},
	}
	componentDidMount(){
		const {topics} = this.props.pageStore;
		topics.map((topic, id) => {
			if(topic.url !== '/'){
				this.setState((state) => {
					state.topics.push({text: topic.name, value: topic.id})
				})
			}
		})
		const {activePage} = this.state;
		this.props.backendStore.getArticles(activePage - 1);
	}
	show = () => this.setState({ open: true })

	handleChange = (e) => {
		const { name, value } = e.target;
		let statusCopy = Object.assign({}, this.state);
		statusCopy.article[name] = value;
		this.setState(statusCopy);
	}

	handleValueChange = (body) => {
		let statusCopy = Object.assign({}, this.state);
		statusCopy.article.body = body;
		this.setState(statusCopy);
	};

	handleTabChange = (tab = "write" | "preview") =>  this.setState({ tab });

	handlePositiveClick= ()=> {
		const {article, topicId} = this.state;
		if(article.id){
			this.props.backendStore.updateArticle(article)
		}else{
			this.props.backendStore.addArticle(topicId, article);
		}
		this.setState({open: false, article: {}})
	}

	handleSelectedTopic = (e, {value}) => {
		this.setState({topicId: value})
	}

	onPageChange = (e, {activePage}) => {
		this.setState({activePage})
		this.props.backendStore.getArticles(activePage -1)
	}

	render(){
		const {articles} = this.props.backendStore;
		const {data, totalPage}  = articles;
		const {open, article, tab, topics, activePage} = this.state;

		return(
				<Container>
				<Card fluid>
							<Segment color='blue'>
								<Header floated='left'>Topic</Header>
								<Button primary floated='right' onClick={this.show}>New</Button>
								<EditArticleComponent
									open={open}
									title={article.title}
									tab = {tab}
									slug = {article.slug}
									pages = {topics}
									body={article.body}
									handleSelectedTopic = {this.handleSelectedTopic}
									handleTabChange = {this.handleTabChange}
									handleValueChange = {this.handleValueChange}
									handleChange ={this.handleChange}
									handleNegativeClick={()=> {this.setState({open: false, article: {}})}} 
									handlePositiveClick={this.handlePositiveClick}
								/>
							</Segment>
						<Table celled>
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell>Title</Table.HeaderCell>
									<Table.HeaderCell>Slug</Table.HeaderCell>
									<Table.HeaderCell>Published</Table.HeaderCell>
									<Table.HeaderCell>Action</Table.HeaderCell>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{data.map((article, id)=> (
									<Table.Row key={id}>
										<Table.Cell>{article.title}</Table.Cell>
										<Table.Cell>{article.slug}</Table.Cell>
										<Table.Cell>{article.published === true ? "Yes": "No"}</Table.Cell>
										<Table.Cell><Button
										 floated='right'
										 onClick={()=> {
											 this.setState({open: true, article: Object.assign({}, article)})
										 }}
										 primary icon='edit'/>
										 </Table.Cell>
									</Table.Row>
								))}
							</Table.Body>
							<Table.Footer>
								<Table.Row>
									<Table.HeaderCell colSpan='4'>
										<Pagination
										 floated='right'
										 boundaryRange={2}
										 firstItem={null}
										 activePage = {activePage}
										 lastItem={null}
										 ellipsisItem={null}
										 totalPages={totalPage}
										 onPageChange = {this.onPageChange}/>
									</Table.HeaderCell>
								</Table.Row>
							</Table.Footer>
						</Table>
					</Card>
				</Container>
		)
	}
}

export default ArticlesComponent;