import { observable, action } from "mobx";
import service from "../service/service";

class ArticleEditorStore {

	@observable isLoading = false;

	@observable currentArticle = {}

	@action
	getArticleById(id){
		service.getArticleById(id)
		.then(action((res)=> {
			this.currentArticle = res.data;
		}))
		.finally(action(()=> this.isLoading = false))
	}
}

export default new ArticleEditorStore();

