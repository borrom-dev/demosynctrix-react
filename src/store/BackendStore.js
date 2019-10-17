import { observable, action } from "mobx";
import service from '../service/service';

class backendStore {
	@observable topics = [];
	@observable articles = {data: [], size: 0, totalPage: 0};
	@observable recents = {
		data: [],
		size: 0,
		totalPage: 0
	};
	@observable isLoading = false;

	@observable tab = 'Write';
	@observable currentArticle = {
	}

	@action
	getRecentArticles(){
		this.isLoading = true;
		service.getRecentArticle()
		.then(action((res)=> {
			this.recents = res.data;
		}))
		.catch(action((error) => {
			console.log(error.message);
		}))
		.finally(action(()=> this.isLoading = false));
	}

	@action
	setTab(tab){
		this.tab = tab;
	}

	@action
	appendBody(value){
		const body = this.currentArticle.body;
		this.currentArticle.body = body.concat(value);
	}

	@action
	getTopics(){
		this.isLoading = true;
		service.getPages()
		.then(action((res) =>{
			this.topics = res.data;
		}))
		.catch(action((error) => {
			console.log(error.message);
		}))
		.finally(action(() => this.isLoading = false));
	}

	@action
	addTopic(topic){
		this.isLoading = true;
		service.addTopic(topic)
		.then(action((rest)=> {
			this.topics.push(rest.data)
		}))
		.catch(action((error)=> {
			console.log(error.message);
		}))
		.finally(action(() => this.isLoading = false));
	}

	@action
	deletTopic(topic){
		this.isLoading = true;
		service.deletTopic(topic)
		.then(action((res) => {
			this.topics.pop(res.data);
		}))
		.finally(action(() => this.isLoading = false));
	}

	@action
	getArticleById(id){
		this.isLoading = true;
		service.getArticleById(id)
		.then(action((res) => {
			this.currentArticle = res.data;
		}))
	}

	@action
	setCurrentArticle(name, value){
		this.currentArticle[name] = value;
	}

	@action
	getArticles(currentPage){
		this.isLoading = true;
		service.getAllArticles(currentPage)
		.then(action((res)=> {
			this.articles = res.data;
		}))
		.catch(action((error)=> {
			console.log(error.message);
		}))
		.finally(action(() => this.isLoading = false));
	}

	@action
	addArticle(pageId, article){
		this.isLoading = true;
		service.addArticle(pageId, article)
		.then(() => service.getAllArticles(0))
		.then(action((res) => {
			this.articles = res.data;
		}))
		.catch(action((error) => {
			console.log(error);
		}))
		.finally(action(() => this.isLoading = false));
	}

	@action
	updateArticle(article){
		this.isLoading = true;
		console.log(article);
		service.updateArticle(article)
		.then(action((res)=> {
			const {data} = this.articles;
			var indexOf = data.findIndex((e)=> {
				return e.id === article.id;
			})
			data[indexOf] = res.data;
		}))
		.finally(action(() => this.isLoading = false));
	}

	@action
	deleteArticle(article){
		service.deleteArticle(article)
		.then(() => service.getAllArticles(0))
		.then(action((res) => {
			this.articles = res.data;
		}))
		.finally(action(() => this.isLoading = false))
	}
}

export default new backendStore();