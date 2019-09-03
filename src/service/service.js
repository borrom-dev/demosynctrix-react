import api from './api';

const Service = {
	getCars: () =>  api.get("/cars"),
}

export default Service;