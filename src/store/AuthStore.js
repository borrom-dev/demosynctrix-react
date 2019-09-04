import { observable, action } from "mobx";
import service from '../service/authService';
import {clearToken} from '../helper';

class AuthStore {
	@observable isloading = false;
	@observable errors = undefined;

	@action
	login(user) {
		this.isloading = true;
		this.errors = undefined;
		return service.login(user)
		.catch(action((error) => {
				this.errors = error;
				throw error;
		}))
		.finally(action(() => this.isloading = false))
	}

	@action
	register(user){
		this.isloading = true;
		this.errors = undefined;
		return service.register(user)
		.catch(action((error)=> {
			this.errors = error;
			throw error;
		}))
		.finally(action(()=> this.isloading =false))
	}

	@action
	logout(){
		return new Promise((resolve)=>{
			clearToken();
			resolve()
		})
	}
}

const authStore = new AuthStore();
export default authStore;