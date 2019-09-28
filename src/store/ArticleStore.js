import { observable, action } from "mobx";
import service from "../service/service";

class ArticleStore {

	@observable articles = {
        data: []
	};
	
	@observable isLoading = false;

	@observable currentArticle = {}

	@observable form = {
		tab: 'Write'
	}



	@action
	getArticleById(id){
		this.isLoading = true;
		service.getArticleById(id)
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

