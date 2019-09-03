import { observable, action, reaction } from "mobx";
import service from '../service/service';

class CommonStore {
	@observable isLoading = false;
	@observable cars = [];

	constructor(){
		reaction(
			() => this.token, token=>{
				if(token){
					localStorage.setItem('token', token)
				}else{
					localStorage.removeItem('token')
				}
			}
		)
	}

	@action
	getCars(){
		this.isLoading = true;
		service.getCars()
		.then(action((res) => {
			this.cars = res.data;
		}))
		.finally(action(() => {
			this.isLoading = false;
		}))
	}
}

const commonStore = new CommonStore();
export default commonStore;