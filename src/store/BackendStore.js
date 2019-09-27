import { observable, action } from "mobx";
import service from '../service/service';

class backendStore {
	@observable topics = [];
	@observable articles = {data: [], size: 0, totalPage: 0};
	@observable recents = [];
	@observable isLoading = false;

	@observable formData = {
		article: {

		}
	}

	@action
	getRecentArticles(){
		this.isLoading = true;
		service.getRecentPosts()
		.then(action((res)=> {
			this.recents = res.data;
		}))
		.catch(action((error) => {
			console.log(error.message);
		}))
		.finally(action(()=> this.isLoading = false));
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
			this.formData['article'] = res.data;
		}))
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
		console.log(article.topic.id);
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

	@action
	publishArticle(article){
		service.updateArticle(article)
		.then(action(() => {
			const indexOf = this.articles.data.findIndex(x => x.id === article.id);
			this.articles.data[indexOf] = article;
		}))
		.finally(action(()=> this.isLoading = false))
	}
}

export default new backendStore();