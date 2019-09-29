import { observable, action } from "mobx";
import service from "../service/service";

class FrontendStore {

	@observable articles = { data: [], size: 0, totalPage: 0};
	@observable isLoading = false;

	@action
	getArticles(){
        this.isLoading = true;
	    service.getAllArticles()
		.then(action((res)=> {
			this.articles = res.data;
		}))
		.finally(action(()=> this.isLoading = false))
    }
    
    @action
    getAllPostByTopic(id){
        this.isLoading = true;
        service.getAllPostByTopic(id)
        .then(action((res) => {
            this.articles = res.data;
        }))
        .finally(action((error) => {
            this.isLoading = false;
        }))
    }

    @action
    getRecentArticle(){
        this.isLoading = true;
        service.getRecentArticle()
        .then(action((res) => {
            this.articles = res.data;
        }))
        .finally(action(action(() => this.isLoading = false)));
    }
}

export default new FrontendStore();

