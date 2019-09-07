import { observable, action } from "mobx";
import Service from "../service/service";

class UserStore {

	@observable users = [];
	@observable isLoading = false;

	@action
	loadUsers(){
		Service.getUsers()
		.then(action((res)=> {
			this.users = res.data;
			console.log(res.data);
		}))
		.finally(action(()=> this.isLoading = false))
	}
}

export default new UserStore();

