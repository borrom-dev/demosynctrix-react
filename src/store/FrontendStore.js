import { observable, action } from "mobx";
import service from "../service/service";

class FrontendStore {

	@observable articles = [];
	@observable isLoading = false;

	@action
	getPosts(){
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
}

export default new FrontendStore();

