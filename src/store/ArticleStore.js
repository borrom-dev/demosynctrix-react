import { observable, action } from "mobx";
import service from "../service/service";

class ArticleStore {

	@observable articles = {
        data: []
    };
	@observable isLoading = false;


	@action
	getTopicArticles(id){
		service.getAllPostByTopic(id)
		.then(action((res)=> {
			this.articles = res.data;
		}))
		.finally(action(()=> this.isLoading = false))
	}
}

export default new ArticleStore();

