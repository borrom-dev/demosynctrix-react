import client from './api';

const Service = {

	getCars(){
		return client.get("/cars");
	}
}

export default Service;