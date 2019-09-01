import {action, observable} from 'mobx';
import service from '../service/service'

class HomeStore {
	@observable cars = []
	@observable error = null;

	@action async getCars() {
		try {
			const res = await service.getCars();
			this.cars = res.data;
		} catch (error) {
			this.error = error;
		}
	}
}

export default new HomeStore();