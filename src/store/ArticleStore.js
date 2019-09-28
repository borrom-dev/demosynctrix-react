import { observable, action } from "mobx";
import service from "../service/service";

class ArticleStore {

	@observable topicsOptions = []

	@observable articles = {
        data: []
	};
	
	@observable isLoading = false;

	@observable currentArticle = {
		topic_id: undefined,
	}

	@observable form = {
		tab: 'Write'
	}

	@action
	getArticleById(id){
		this.isLoading = true;
		service.getPages()
		.then(action((res) => {
			this.topicsOptions = [];
			res.data.map((topic, id) => {
				this.topicsOptions.push({key: id, text: topic.name, value: topic.id})
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
		this.isLoading = true;
		return service.updateArticle(this.currentArticle)
		.finally(action(() => this.isLoading = false));
	}

	@action setCurrentArticle(name, value){
		this.currentArticle[name] = value;
	}
}

export default new ArticleStore();

