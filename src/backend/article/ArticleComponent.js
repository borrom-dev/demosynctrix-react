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
	Button
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
		topics: []
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

		this.props.backendStore.getArticles();
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

	render(){
		const {articles} = this.props.backendStore;
		const {open, title, slug, body, tab, topics} = this.state;

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
								{articles.map((article, id)=> (
									<Table.Row>
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
										<Menu floated='right' pagination>
											<Menu.Item as='a' icon>
												<Icon name='chevron left' />
											</Menu.Item>
											<Menu.Item as='a'>1</Menu.Item>
											<Menu.Item as='a'>2</Menu.Item>
											<Menu.Item as='a'>3</Menu.Item>
											<Menu.Item as='a'>4</Menu.Item>
											<Menu.Item as='a' icon>
												<Icon name='chevron right' />
											</Menu.Item>
										</Menu>
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