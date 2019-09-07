import { observable, action } from "mobx";
import Service from "../service/service";

class PostStore {

	@observable posts = [];
	@observable isLoading = false;


	@action
	loadPosts(){
		Service.getPosts()
		.then(action((res)=> {
			this.posts = res.data;
		}))
		.finally(action(()=> this.isLoading = false))
	}
}

export default new PostStore();

