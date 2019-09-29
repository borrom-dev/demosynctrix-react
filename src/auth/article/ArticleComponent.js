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

	setArticleTopic: action(function(topic){
		this.article.topic = topic;
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

	handleSelectedTopic = (e, {value}) => {
		const {topics} = this.props.pageStore;
		const topic = topics.find(x => x.id === value);
		articleForm.setArticleTopic(topic)
	}

	render(){
		const {articles} = this.props.backendStore;
		const {data, totalPage}  = articles;
		const {activePage} = articleForm;
		return(
			<Container>
			<Header as='h1' floated='left'>Article</Header>
			<Button primary floated='right' onClick={() => {
				this.props.history.push('/dashboard/new-article')}
				}>New</Button>
			<Divider clearing />
				<Grid columns={2}>
				{articles.data.map((article, id) => (
					<GridColumn key={id}>
						<Segment clearing>
							<Item>
								<Header as='h1'><Link>{article.title}</Link></Header>
								<Item.Description>{article.description}</Item.Description>
								<Item.Meta style={{marginTop: 15}}>
									<Button primary floated='right' onClick={() => {
										this.props.history.push(`/dashboard/edit-article/${article.id}`)
									}}>Edit</Button>
									<Label>Published</Label>
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