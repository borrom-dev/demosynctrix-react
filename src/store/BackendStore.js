import { observable, action } from "mobx";
import service from '../service/service';

class backendStore {

	@observable posts = []
	@observable isLoading = false;

	@action
		getRecentPosts(){
			this.isLoading = true;
			service.getRecentPosts()
			.then(action((res)=> {
				this.posts = res.data;
			}))
			.finally(action(()=> this.isLoading = false))
		}
}

export default new backendStore();