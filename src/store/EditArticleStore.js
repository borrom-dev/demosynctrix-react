import { observable, action } from "mobx";
import service from "../service/service";

class EditArticleStore {

	@observable topicsOptions = []

	@observable isLoading = false;

	@observable currentArticle = {
		topic_id: undefined,
	}

	@observable form = {
		tab: 'Write'
	}

	@action
	getAllTopics(){
		this.isLoading = true;
		service.getPages()
		.then(action((res) => {
			this.topicsOptions = [];
			res.data.map((topic, id) => {
				if(topic.url !== '/'){
					this.topicsOptions.push({key: id, text: topic.name, value: topic.id})
				}
			})
		}))
		.finally(action(() => this.isLoading = false))
	}

	@action
	getArticleById(id){
		this.isLoading = true;
		service.getPages()
		.then(action((res) => {
			this.topicsOptions = [];
			res.data.map((topic, id) => {
				if(topic.url !== '/'){
					this.topicsOptions.push({key: id, text: topic.name, value: topic.id})
				}
			})
			return service.getArticleById(id)
		}))
		.then(action((res)=> {
			this.currentArticle = res.data;
		}))
		.finally(action(()=> this.isLoading = false))
	}

	@action
	setTab(value) {
		this.form.tab = value;
	}

	@action
	appendBody(value) {
		const {body} = this.currentArticle;
		this.currentArticle.body = body.concat(value);
	}

	@action
	setTopicId(id){
		this.currentArticle.topic_id = id;
	}

	@action
	updateArticle(){
		console.log('hello');
		this.isLoading = true;
		return service.updateArticle(this.currentArticle)
		.finally(action(() => this.isLoading = false));
	}


	@action setCurrentArticle(name, value){
		if(name === 'title'){
			this.currentArticle['slug'] = value.split(' ').join('-').toLowerCase();
		}
		this.currentArticle[name] = value;
	}

	@action
	publishArticle(article){
		this.isLoading = true;
		article.published = !article.published;
		return service.updateArticle(article)
		.finally(action(()=> this.isLoading = false))
	}
}

export default new EditArticleStore();

