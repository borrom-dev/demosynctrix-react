import { observable, action } from "mobx";
import Service from "../service/service";

class PageStore {
	@observable topics =  [];
	@observable isLoading = false;


	@action
	getPages(){
		this.isLoading = true;
		Service.getPages()
		.then(action((res)=> {
			this.topics = res.data;
		}))
		.finally(action(()=> this.isLoading = false))
	}
}

export default new PageStore();

