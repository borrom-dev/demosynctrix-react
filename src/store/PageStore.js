import { observable, action } from "mobx";
import service from "../service/service";

class PageStore {
	@observable topics =  [];
	@observable isLoading = false;
	@observable articles = {
		data: []
	};


	@action
	getPages(){
		this.isLoading = true;
		service.getActivePages()
		.then(action((res)=> {
			this.topics = res.data;
		}))
		.finally(action(()=> this.isLoading = false));
	}

	@action
	getArticleByTopic(id){
		this.isLoading = true;
		service.getAllArticles(0)
		.then(action((res) => {
			this.articles = res.data; 
		}))
		.finally(action(() => this.isLoading = false));
	}
}

export default new PageStore();

