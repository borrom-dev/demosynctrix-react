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
import { observable, action } from 'mobx';

const articleForm = observable({
	open: false,
	tab: 'write',
	topics: [],
	activePage: 1,
	topicId: undefined,
	article: {
		title: '',
		body: '',
		topic: {}
	},

	setField: action(function(field, value){
		this.article[field] = value;
	}),

	close: action(function(){
		this.open = false;
		this.article = {
			topic: {}
		};
	}),

	show: action(function(){
		this.open = true;
	}),

	setTopics: action(function(topics){
		topics.map((topic, id) => {
			if(topic.url !== '/'){
				this.topics.push({text: topic.name, value: topic.id})
			}
		})
	}),

	setBody: action(function(body){
		this.article.body = body;
	}),

	setEditArticle: action(function(value){
		this.article = value;
		this.topicId = value.topic.id;
		this.open = true;
	}),

	setTopicId: action(function(id){
		const topic = this.topics.find(x => x.value === id);
		this.article.topic = {id: topic.value};
	}),

	setPublishArticle: action(function(article){
		this.article = article;
		this.article.published = !article.published;
	})

});

@inject('backendStore', 'pageStore')
@observer
class ArticlesComponent extends React.Component {

	componentDidMount(){
		const {topics} = this.props.pageStore;
		articleForm.setTopics(topics);
		this.props.backendStore.getArticles(articleForm.activePage - 1);
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		articleForm.setField(name, value);
	}

	handleValueChange = (body) => {
		articleForm.setBody(body);
	};

	handleTabChange = (tab = "write" | "preview") => articleForm.setField('tab', tab);

	handlePositiveClick= ()=> {
		const {article} = articleForm;
		const {topic} = article;
		if(article.id){
			this.props.backendStore.updateArticle(article);
		}else{
			this.props.backendStore.addArticle(topic.id, article);
		}
		articleForm.close();
	}

	onPageChange = (e, {activePage}) => {
		this.setState({activePage})
		this.props.backendStore.getArticles(activePage -1)
	}

	deleteArticle = (article) => {
		this.props.backendStore.deleteArticle(article);
	}

	publish = (article)=> {
		articleForm.setPublishArticle(article);
		this.props.backendStore.publishArticle(articleForm.article);
	}

	render(){
		const {articles} = this.props.backendStore;
		const {data, totalPage}  = articles;
		const {open, article, tab, topics, activePage} = articleForm;
		return(
				<Container>
				<Card fluid>
						<Segment color='blue'>
							<Header floated='left'>Topic</Header>
							<Button primary floated='right' onClick={() => articleForm.show()}>New</Button>
							<EditArticleComponent
								open={open}
								title={article.title}
								tab = {tab}
								topicId = {article.topic.id}
								slug = {article.slug}
								pages = {topics}
								body={article.body}
								handleSelectedTopic = {(e, {value}) => articleForm.setTopicId(value)}
								handleTabChange = {this.handleTabChange}
								handleValueChange = {this.handleValueChange}
								handleChange ={this.handleChange}
								handleNegativeClick={()=> articleForm.close()} 
								handlePositiveClick={this.handlePositiveClick}
							/>
						</Segment>
						<Table celled>
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell>Title</Table.HeaderCell>
									<Table.HeaderCell>Slug</Table.HeaderCell>
									<Table.HeaderCell>Action</Table.HeaderCell>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{data.map((article, id)=> (
									<Table.Row key={id}>
										<Table.Cell>{article.title}</Table.Cell>
										<Table.Cell>{article.slug}</Table.Cell>
										<Table.Cell>
											<Button
												floated='right'
												negative
												onClick={() => this.deleteArticle(article)}
												icon='delete'/>

											<Button
												floated='right'
												onClick={()=> articleForm.setEditArticle(article)}
												primary icon='edit'/>

											<Button
												floated='right'
												onClick={()=> this.publish(article)}
												positive
												icon={article.published ? 'toggle on' : 'toggle off'}/>	
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