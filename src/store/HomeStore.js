import { observable, action } from "mobx";
import service from '../service/service';

class HomeStore {
	@observable isLoading = false;
	@observable.shallow cars = [];
	@observable error = null;

	@action
	getCars(){
		this.isLoading = true;
		service.getCars()
		.then(action((res)=> {
			this.cars = res.data;
		}))
		.catch(action((error)=> {
				this.error = error;
		}))
		.finally(action(()=> {
			this.isLoading = false;
		}));
	}
}

const homeStore = new HomeStore();
export default homeStore;