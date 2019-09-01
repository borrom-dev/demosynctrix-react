import {action, computed, observable} from 'mobx';
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
			console.log(res.data);
			this.isLoading = false;
		 } catch (error) {
			this.error = error;
			this.isLoading = false
			console.log(this.error);
	 }
	}
}

export default new AuthStore();
