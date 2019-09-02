import { observable, action } from "mobx";
import service from '../service/authService';
class AuthStore {
	@observable isloading = false;
	@observable errors = undefined;

	@action
	login(user) {
		this.isloading = true;
		this.errors = undefined;
		return service.login(user)
		.then((res) => {
			const token = res.data.token;
			localStorage.setItem('token', token)
		})
		.catch(action((error) => {
				this.errors = error;
				throw error;
		}))
		.finally(action(() => {
				this.isloading = false;
		}))
	}

	@action
	logout(){
		localStorage.removeItem('token')
		return Promise.resolve();
	}
}

const authStore = new AuthStore();
export default authStore;