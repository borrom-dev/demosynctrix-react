import { observable, action } from "mobx";
import Service from "../service/service";

class UserStore {

	@observable users = [];
	@observable isLoading = false;

	@action
	loadUsers(){
		this.isLoading = true;
		Service.getUsers()
		.then(action((res)=> {
			this.users = res.data;
		}))
		.finally(action(()=> this.isLoading = false))
	}
}

export default new UserStore();
