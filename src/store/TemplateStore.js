import { observable, action } from "mobx";
import Service from "../service/service";

class TemplateStore {
	@observable posts =  [];
	@observable isLoading = false;


	@action
	getRecentPosts(){
		Service.getRecentPosts()
		.then(action((res)=> {
			this.posts = res.data;
		}))
		.finally(action(()=> this.isLoading = false))
	}
}

export default new TemplateStore();

