import Api from './api';

const Service = {

	getCars(){
		return Api.get("/cars");
	}
}

export default Service;