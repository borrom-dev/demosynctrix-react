import { observable, action } from "mobx";
import Service from "../service/service";

class PageStore {
	@observable page =  null;
	@observable isLoading = false;


	@action
	loadPosts(){
		Service.getPage()
		.then(action((res)=> {
			this.page = res.data;
		}))
		.finally(action(()=> this.isLoading = false))
	}
}

export default new PageStore();

