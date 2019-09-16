import React from 'react'
import {
	Icon,
	Segment,
	Modal,
	Header,
	Menu,
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
		title: '',
		body: '',
		slug: '',
		tab: 'write',
		topicId: 0,
		topics: [],
		activePage: 1
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
		this.setState({ [name]: value });
	}

	handleValueChange = (body) => this.setState({ body });

	handleTabChange = (tab = "write" | "preview") =>  this.setState({ tab });

	handlePositiveClick= ()=> {
		this.setState({open: false});
		const {title, slug, topicId, body} = this.state;
		this.props.backendStore.addArticle(topicId, {title, slug, body});
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
		const {data, totalPage, size}  = articles;
		const {open, title, slug, body, tab, topics, activePage} = this.state;

		return(
				<Container>
				<Card fluid>
							<Segment color='blue'>
								<Header floated='left'>Topic</Header>
								<Button primary floated='right' onClick={this.show}>New</Button>
								<EditArticleComponent
								 open={open}
								 title={title}
								 tab = {tab}
								 slug = {slug}
								 pages = {topics}
								 body={body}
								 handleSelectedTopic = {this.handleSelectedTopic}
								 handleTabChange = {this.handleTabChange}
								 handleValueChange = {this.handleValueChange}
								 handleChange ={this.handleChange}
								 handleNegativeClick={()=> {this.setState({open: false})}} 
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
										<Table.Cell>Edit</Table.Cell>
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