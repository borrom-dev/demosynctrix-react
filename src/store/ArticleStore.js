import { observable, action } from "mobx";
import service from "../service/service";

class ArticleStore {

	@observable articles = {
        data: []
	};
	
	@observable isLoading = false;

	@observable currentArticle = {}

	@action
	getArticleByTopic(id){
		// 
	}

	@action
	getArticleById(id){
		service.getArticleById(id)
		.then(action((res)=> {
			this.currentArticle = res.data;
		}))
		.finally(action(()=> this.isLoading = false))
	}
}

export default new ArticleStore();

