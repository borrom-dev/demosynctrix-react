import {action, observable} from 'mobx';
import service from '../service/service'

class AuthStore {
	 @observable error = null;
	 @observable token = null;
	 @observable isLoading = false;

	 @action async login(user){
		 this.isLoading = true;
		 try {
			const res = await service.login(user);
			this.token = res.data;
			this.isLoading = false;
			localStorage.setItem("token", this.token.token);
		 } catch (error) {
			this.error = error;
			this.isLoading = false
	 }
	}
}

export default new AuthStore();
